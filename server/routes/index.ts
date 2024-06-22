import { Hono } from "hono";
import { BlankEnv, BlankSchema } from "hono/types";

import {
	authRoutes,
	clusterRoutes,
	userRoutes,
	walletRoutes,
} from "../modules";
import { indexRoutes } from "./home";

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, "/">) {
	const apiRoutes = app
		.basePath("/api")
		.route("/", indexRoutes)
		.route("/auth", authRoutes)
		.route("/cluster", clusterRoutes)
		.route("/user", userRoutes)
		.route("/wallets", walletRoutes);

	return apiRoutes;
}
