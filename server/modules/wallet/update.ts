import { InternalServerErrorException, Logger } from "@nestjs/common"
import { CommandBus, CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { CreateDocumentCommand } from "@paymais/document/cqrs/index"
import { UpdateUserCommand } from "@paymais/users/cqrs/command/impl"
import { UpdateUserResponse } from "@paymais/users/dto"
import axios from "axios"
import * as bcrypt from "bcrypt"
import { UserRepository, VirtualAccountRepository } from "src/users/repository"
import { VirtualAccountService } from "src/virtualAccounts"

/**
 * @implements {ICommandHandler<UpdateUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  logger = new Logger(this.constructor.name)

  constructor(
    private readonly userRepository: UserRepository,
    private readonly virtualAccountRepository: VirtualAccountRepository,
    private readonly commandBus: CommandBus,
    private readonly virtualAccountService: VirtualAccountService
  ) {}

  async execute(command: UpdateUserCommand): Promise<UpdateUserResponse> {
    const originalString = `${process.env.MONIFY_API_KEY}:${process.env.MONIFY_API_SECRET}`
    const base64String = Buffer.from(originalString).toString("base64")

    this.logger.log(`Async ${command.constructor.name}...`)
    const { input, id } = command.payload

    try {
      if (input.identityFile) {
        this.commandBus.execute(
          new CreateDocumentCommand({
            document: input.identityFile,
            key: `user/${id}/identityProof`,
            owner: id,
            documentType: "IdentityProof",
          })
        )
        delete input.identityFile
      }

      if (input.addressFile) {
        this.commandBus.execute(
          new CreateDocumentCommand({
            document: input.addressFile,
            key: `user/${id}/addressProof`,
            owner: id,
            documentType: "AddressProof",
          })
        )
        delete input.addressFile
      }
      if (input.password) {
        input.password = await bcrypt.hash(input.password, 10)
      }
      let updatedUser = await this.userRepository.update(id, input)

      if (input.completed) {
        const token: any = await axios
          .post(
            "https://sandbox.monnify.com/api/v1/auth/login",
            {},
            {
              headers: {
                Authorization: `Basic ${base64String}`,
              },
            }
          )
          .catch((error) => {
            throw new InternalServerErrorException(
              "Account authorization failed"
            )
          })

        const walletRef = `ref-${
          Math.floor(Math.random() * (999 - 100 + 1)) + 100
        }`

        const wallet: any = await axios
          .post(
            "https://sandbox.monnify.com/api/v1/disbursements/wallet",
            {
              walletReference: walletRef,
              walletName: `Paymais Wallet - ${walletRef}`,
              customerName: `${input.firstName} ${input.firstName}`,
              bvnDetails: {
                bvn: input.bvn,
                bvnDateOfBirth: `${input.dateOfBirth}`,
              },
              customerEmail: `${input.email}`,
            },
            {
              headers: {
                Authorization: `Bearer ${token.data.responseBody.accessToken}`,
              },
            }
          )
          .catch((error) => {
            console.log({ ...error })
            throw new InternalServerErrorException(
              error.data.responseMessage ||
                "Wallet creation, please ensure you are passing the correct bvn details"
            )
          })

        const payMaisAcc = await this.virtualAccountRepository.create({
          provider: "Monify",
          customerId: wallet.data.responseBody.customerEmail,
          providerId: wallet.data.responseBody.accountNumber,
          accountName: wallet.data.responseBody.customerName,
          accountNumber:
            wallet.data.responseBody.topUpAccountDetails.accountNumber,
          currency: "NGN",
          bankName: wallet.data.responseBody.topUpAccountDetails.bankName,
          bankId: wallet.data.responseBody.topUpAccountDetails.bankCode,
          active: false,
          userId: updatedUser._id,
        })

        updatedUser = await this.userRepository.update(updatedUser._id, {
          virtualAccountId: payMaisAcc._id,
          virtualAccount: payMaisAcc,
        })
      }

      return { user: updatedUser }
    } catch (error) {
      this.logger.log(error)
    }
  }
}
