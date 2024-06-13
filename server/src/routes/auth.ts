import { Hono } from "hono";

export const authRoutes = new Hono();

authRoutes.get("/verify_otp", async (c) => {
  return c.json({
    msg: "We gonna verify your otp",
  });
});
