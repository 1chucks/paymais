import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const VerifyOtpSchema = zValidator(
  "form",
  z.object({
    title: z.string(),
    body: z.string(),
  })
);
