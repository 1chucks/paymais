import { Hono } from "hono"

import { sendOtpSchema, verifyOtpSchema } from "./schema"

export const clusterRoutes = new Hono()
  .post("/create_cluster", sendOtpSchema, async (c) => {
    return c.json({ msg: "Otp Sent" }, 200)
  })
  .post("/get_cluster/:id", verifyOtpSchema, async (c) => {
    return c.json({
      msg: "Otp verified",
    })
  })
