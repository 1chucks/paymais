import { eq } from "drizzle-orm";

import { db } from "..";
import { authTokenSchema } from "../schema";

export class AuthRepository {
	async createRefreshToken(params: { userId: number; token: string }) {
		try {
			await db.insert(authTokenSchema).values({
				userId: params.userId,
				refreshToken: params.token,
			});
		} catch (error) {
			throw new Error("Could not save token");
		}
	}
}
