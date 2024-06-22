import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const verifyOtpSchema = zValidator(
	"json",
	z.object({
		otp: z.string(),
		token: z.string(),
	}),
);
export const sendOtpSchema = zValidator(
	"json",
	z.object({
		phone: z.string(),
		referralCode: z.string().optional(),
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
export const loginSchema = zValidator(
	"json",
	z.object({
		phone: z.string(),
		password: z.string(),
	}),
);
export const logoutSchema = zValidator(
	"json",
	z.object({
		token: z.string(),
	}),
);
