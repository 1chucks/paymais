import { AuthRepository } from "@/server/db"
import * as jwt from "jsonwebtoken"

import { NotificationService } from "../notification"
import { UserService } from "../users"

export class AuthService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly userService: UserService,
    private readonly authRepo: AuthRepository
  ) {}

  async sendOtp(props: { phone: string }) {
    const { token, value } = this.otpGenerator(6)

    await this.notificationService.sendOtpToPhone({
      phone: props.phone,
      msg: "Your one time password is " + value,
    })

    return {
      msg: "success",
      access_token: token,
      otp: value,
    }
  }

  async verifyOtp(props: { otp: string; token: string }) {
    const res = await this.otpVerify(props)
    if (res) {
      return {
        msg: "success",
      }
    } else {
      throw new Error("Invalid OTP")
    }
  }

  async createAccount(props: { phone: string; bvn: number; password: string }) {

    const res = await this.userService.createUser(props)
  }

  async login(props: { phone: string; password: string }) {
    const user = await this.userService.findByPhone(props.phone)
  }

  async resetPasswordSendOtp(props: { phone: string }) {
    const { token, value } = this.otpGenerator(6)

    await this.notificationService.sendOtpToPhone({
      phone: props.phone,
      msg: "Your one time password is " + value,
    })

    return {
      msg: "success",
      access_token: token,
      otp: value,
    }
  }
  async resetPasswordVerifyOtp(props: { otp: string; token: string }) {
    const res = await this.otpVerify(props)
    // todo: get user info
    // add user id to the token data
    if (res) {
      return {
        msg: "success",
      }
    } else {
      throw new Error("Invalid OTP")
    }
  }

  async resetPassword(props: { token: string; newPassword: string }) {
    const o = await this.tokenDecode(props)

    const res = await this.userService.updatePassword({
      userId: o.userId,
      newPassword: props.newPassword,
    })
  }

  async logout(props: { token: string }) {}

  private async genRefreshToken(props: {
    token: string
    newPassword: string
  }) {}

  private async tokenDecode(props: { token: string }) {
    const res = jwt.decode(props.token)

    const userData = JSON.parse(res as string)

    return {
      userId: userData!.id,
    }
  }
  private async otpVerify(props: { otp: string; token: string }) {
    let isValid: boolean = false
    const res = jwt.verify(props.token, process.env.JWT_SECRET!, (err, otp) => {
      if (err) return isValid
      if (props.otp !== otp) return isValid
      if (props.otp === otp) {
        isValid = true
        return isValid
      }
    })
    return isValid
  }

  private otpGenerator(count: number) {
    // todo create token with otp and add expiration date
    let randomNumbersString = ""
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10)
      randomNumbersString += randomNumber.toString()
    }
    const res = jwt.sign(randomNumbersString, process.env.JWT_SECRET!, {
      expiresIn: "5m",
    })
    return {
      // value: "093943",
      value: randomNumbersString,
      token: res,
    }
  }
}
