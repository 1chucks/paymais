import { Hono } from "hono"

import { NotificationService } from "../notification"
import {
  createAccountSchema,
  sendOtpSchema,
  verifyBvnSchema,
  verifyOtpSchema,
} from "./schema"
import { AuthService } from "./service"

const authService = new AuthService(new NotificationService())

export const authRoutes = new Hono()
  .post("/send_otp", sendOtpSchema, async (c) => {
    try {
      const res = authService.sendOtp({ phone: "" })
      return c.json({ msg: "Otp Sent" }, 200)
    } catch (error) {
      return c.json({ msg: "Could not send OTP" }, 400)
    }
  })
  .post("/verify_otp", verifyOtpSchema, async (c) => {
    return c.json({
      msg: "Otp verified",
    })
  })
  .post("/verify_bvn", verifyBvnSchema, async (c) => {
    return c.json({
      msg: "BVN verified",
    })
  })
  .post("/create_account", createAccountSchema, async (c) => {
    return c.json({
      msg: "Account created",
    })
  })
  .post("/reset_password_send_otp", createAccountSchema, async (c) => {
    return c.json({
      msg: "Account created",
    })
  })
  .post("/reset_password_verify_otp", createAccountSchema, async (c) => {
    return c.json({
      msg: "Account created",
    })
  })
  .post("/reset_password", createAccountSchema, async (c) => {
    return c.json({
      msg: "Account created",
    })
  })
