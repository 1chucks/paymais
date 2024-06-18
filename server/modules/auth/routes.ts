import { OtpRepository } from "@/server/db"
import { Hono } from "hono"

import { NotificationService } from "../notification"
import {
  createAccountSchema,
  sendOtpSchema,
  verifyBvnSchema,
  verifyOtpSchema,
} from "./schema"
import { AuthService } from "./service"

const authService = new AuthService(
  new NotificationService(),
  new OtpRepository()
)

export const authRoutes = new Hono()
  .post("/send_otp", sendOtpSchema, async (c) => {
    try {
      const payload = c.req.valid("json")
      console.log(payload)
      // const res = authService.sendOtp({ phone: payload.phone })

      return c.json({ msg: "Otp Sent" }, 200)
    } catch (error) {
      return c.json({ msg: "Could not send OTP" }, 400)
    }
  })
  .post("/verify_otp", verifyOtpSchema, async (c) => {
    const payload = c.req.valid("form")
    const res = authService.sendOtp({ phone: payload.body })
    return c.json({
      msg: "Otp verified",
    })
  })
  .post("/verify_bvn", verifyBvnSchema, async (c) => {
    const payload = c.req.valid("json")
    const res = authService.sendOtp({ phone: payload.bvn })
    return c.json({
      msg: "BVN verified",
    })
  })
  .post("/create_account", createAccountSchema, async (c) => {
    const payload = c.req.valid("json")
    const res = authService.sendOtp({ phone: payload.phone })
    return c.json({
      msg: "Account created",
    })
  })
  .post("/reset_password_send_otp", createAccountSchema, async (c) => {
    const payload = c.req.valid("json")
    const res = authService.sendOtp({ phone: payload.phone })
    return c.json({
      msg: "Account created",
    })
  })
  .post("/reset_password_verify_otp", createAccountSchema, async (c) => {
    const payload = c.req.valid("json")
    const res = authService.sendOtp({ phone: payload.phone })
    return c.json({
      msg: "Account created",
    })
  })
  .post("/reset_password", createAccountSchema, async (c) => {
    const payload = c.req.valid("json")
    const res = authService.sendOtp({ phone: payload.phone })
    return c.json({
      msg: "Account created",
    })
  })
