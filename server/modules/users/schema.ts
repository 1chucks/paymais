import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const verifyOtpSchema = zValidator(
	"form",
	z.object({
		title: z.string(),
		body: z.string(),
	}),
);
export const sendOtpSchema = zValidator(
	"json",
	z.object({
		phone: z.string(),
		referralCode: z.string(),
	}),
);
export const verifyBvnSchema = zValidator(
	"json",
	z.object({
		bvn: z.string(),
	}),
);
export const createAccountSchema = zValidator(
	"json",
	z.object({
		phone: z.string(),
		bvn: z.number().min(10, { message: "Minimum of 10 numbers" }),
		password: z.string(),
		confirmPassword: z.string(),
	}),
);
