import { eq } from "drizzle-orm"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

import { db } from ".."
import { usersSchema } from "../schema"

export class OtpRepository {
  async createOtp(params: {
    phone: string
    otp: string
    purpose: "SIGNUP" | "RESET_PASSWORD"
  }) {
    try {
      db.query.otpSchema.findFirst({
        where: (user, { eq }) => eq(usersSchema.phone, params.phone),
        columns: {
          id: true,
          phone: true,
        },
      })
    } catch (error) {}
  }
}
