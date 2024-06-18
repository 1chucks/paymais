import { pgTable, text } from "drizzle-orm/pg-core"

import { baseProperties } from "./utils"

export const otpSchema = pgTable("otp", {
  phone: text("phone").notNull(),
  token: text("token").notNull(),
  signup_otp: text("signup_otp").notNull(),
  reset_password_otp: text("reset_password_otp").notNull(),
  ...baseProperties,
})
