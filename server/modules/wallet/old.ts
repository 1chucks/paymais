import {
	BadRequestException,
	InternalServerErrorException,
} from "@nestjs/common";
import { UserRepository } from "@paymais/users/repository";
import axios from "axios";

export class VirtualAccountService {
	constructor(private readonly userRepository: UserRepository) {}

	async createWallet(userId: string) {
		console.log("getting user");
		console.log({ userId });
		const originalString = `${process.env.MONIFY_API_KEY}:${process.env.MONIFY_API_SECRET}`;
		const base64String = Buffer.from(originalString).toString("base64");
		const user = await this.userRepository.get(
			{ where: { _id: userId } },
			"virtualAccountId",
		);

		if (!user) {
			throw new BadRequestException("User not found");
		}
		const token: any = await axios
			.post(
				"https://sandbox.monnify.com/api/v1/auth/login",
				{},
				{
					headers: {
						Authorization: `Basic ${base64String}`,
					},
				},
			)
			.catch((error) => {
				throw new InternalServerErrorException("Account authorization failed");
			});

		const walletRef = `ref-${Math.floor(Math.random())}`;

		const wallet: any = await axios
			.post(
				"https://sandbox.monnify.com/api/v1/disbursements/wallet",
				{
					walletReference: walletRef,
					walletName: `Paymais Wallet - ${walletRef}`,
					customerName: `${user.firstName} ${user.firstName}`,
					bvnDetails: {
						bvn: "22243796261",
						bvnDateOfBirth: `${user.dateOfBirth}`,
					},
					customerEmail: `${user.email}`,
				},
				{
					headers: {
						Authorization: `Bearer ${token.data.responseBody.accessToken}`,
					},
				},
			)
			.catch((error) => {
				throw new InternalServerErrorException(
					"Wallet creation, please ensure you are passing the correct bvn details",
				);
			});

		return wallet.data.responseBody;
	}
}
