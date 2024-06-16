import { db } from "@/server/db"
import { NotificationService } from "../notification"

export class AuthService {
  constructor(private readonly notificationService: NotificationService) {}

  async sendOtp(props: { phone: string }) {
    // todo generate 6 random numbers
    const generatedNum = this.generateRandomNumbers(6)
    // todo send to phone
    await this.notificationService.sendOtpToPhone(generatedNum)
    // todo save otp sent to db

    // todo return response
  }
  static async createAccount() {}
  static async resetPasswordSendOtp() {}
  static async resetPasswordVerifyOtp() {}
  static async resetPassword() {}

  private generateRandomNumbers(count: number) {
    let randomNumbersString = ""
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10)
      randomNumbersString += randomNumber.toString()
    }
    return randomNumbersString
  }
}
