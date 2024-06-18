import { OtpRepository, db } from "@/server/db"

// import * as jwt from "jsonwebtoken"

import { NotificationService } from "../notification"

export class AuthService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly otpRepo: OtpRepository
  ) {}

  async sendOtp(props: { phone: string }) {
    const otp = this.otpGenerator(6)

    await this.notificationService.sendOtpToPhone({
      phone: props.phone,
      msg: "Your otp is 090923",
    })
    // todo create token with otp and add expiration date

    // todo save otp sent to db
    await this.otpRepo.createOtp({
      phone: props.phone,
      purpose: "SIGNUP",
      otp: otp.value,
    })
    // todo return response
    return {
      msg: "success",
      access_token: otp.token,
    }
  }

  async verifyOtp(props: { otp: string; token: string }) {
    const res = await this.otpVerify(props)
    if (res) {
      return {
        msg: "success",
      }
    }
  }

  static async createAccount() {}
  static async resetPasswordSendOtp() {}
  static async resetPasswordVerifyOtp() {}
  static async resetPassword() {}

  private async otpVerify(props: { otp: string; token: string }) {
    let isValid: boolean = false
    // const res = jwt.verify(props.token, process.env.JWT_SECRET!, (err, otp) => {
    //   if (err) return isValid
    //   if (props.otp !== otp) return isValid
    //   if (props.otp === otp) {
    //     isValid = true
    //     return isValid
    //   }
    // })
    return isValid
  }

  private otpGenerator(count: number) {
    let randomNumbersString = ""
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10)
      randomNumbersString += randomNumber.toString()
    }
    // const res = jwt.sign(randomNumbersString, process.env.JWT_SECRET!)
    return {
      value: randomNumbersString,
      // token: res,
      token: "",
    }
  }
}
