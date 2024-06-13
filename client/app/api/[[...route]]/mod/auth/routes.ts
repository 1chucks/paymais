import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"

import { VerifyOtpSchema } from "./schema"
import { z } from "zod"

const app = new Hono()

export const authRoutes = app
  .get("/verify_otp", async (c) => {
    return c.json({
      msg: "We gonna verify your otp",
    })
  })
  .post("/", VerifyOtpSchema, async (c) => {})
 