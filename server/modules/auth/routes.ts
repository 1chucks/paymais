import { Hono } from "hono"

import {
  createAccountSchema,
  sendOtpSchema,
  verifyBvnSchema,
  verifyOtpSchema,
} from "./schema"

export const authRoutes = new Hono()
  .post("/send_otp", sendOtpSchema, async (c) => {
    return c.json({ msg: "Otp Sent" }, 200)
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
