import { AuthRepository, UserRepository } from "@/server/db";
import { Hono } from "hono";

import { NotificationService } from "../notification";
import { UserService } from "../users";
import {
	createAccountSchema,
	loginSchema,
	logoutSchema,
	sendOtpSchema,
	verifyBvnSchema,
	verifyOtpSchema,
} from "./schema";
import { AuthService } from "./service";

const authService = new AuthService(
	new NotificationService(),
	new UserService(new UserRepository()),
	new AuthRepository(),
);

export const authRoutes = new Hono()
	.post("/send_otp", sendOtpSchema, async (c) => {
		try {
			const payload = c.req.valid("json");
			const res = await authService.sendOtp({ phone: payload.phone });
			return c.json(res, 200);
		} catch (error) {
			return c.json({ msg: error }, 400);
		}
	})
	.post("/verify_otp", verifyOtpSchema, async (c) => {
		const payload = c.req.valid("json");
		try {
			const res = await authService.verifyOtp(payload);
			return c.json(res, 200);
		} catch (error) {
			return c.json({ msg: error }, 400);
		}
	})
	.post("/verify_bvn", verifyBvnSchema, async (c) => {
		const payload = c.req.valid("json");
		const res = authService.sendOtp({ phone: payload.bvn });
		return c.json(res);
	})
	.post("/create_account", createAccountSchema, async (c) => {
		const payload = c.req.valid("json");
		try {
			const res = authService.createAccount(payload);
			return c.json(res, 201);
		} catch (error) {
			return c.json({
				msg: error,
			});
		}
	})
	.post("/login", loginSchema, async (c) => {
		const payload = c.req.valid("json");
		try {
			const res = authService.login(payload);
			return c.json(res, 200);
		} catch (error) {
			return c.json({
				msg: error,
			});
		}
	})
	.post("/logout", logoutSchema, async (c, next) => {
		const payload = c.req.valid("json");
		try {
			const res = authService.logout(payload);
			return c.json(res, 200);
		} catch (error) {
			return c.json({
				msg: error,
			});
		}
	})
	.post("/reset_password_send_otp", createAccountSchema, async (c) => {
		const payload = c.req.valid("json");
		const res = authService.sendOtp({ phone: payload.phone });
		return c.json({
			msg: "Account created",
		});
	})
	.post("/reset_password_verify_otp", createAccountSchema, async (c) => {
		const payload = c.req.valid("json");
		const res = authService.sendOtp({ phone: payload.phone });
		return c.json({
			msg: "Account created",
		});
	})
	.post("/reset_password", createAccountSchema, async (c) => {
		const payload = c.req.valid("json");
		const res = authService.sendOtp({ phone: payload.phone });
		return c.json({
			msg: "Account created",
		});
	});
