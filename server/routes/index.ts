import { Hono } from "hono";
import { BlankEnv, BlankSchema } from "hono/types";
import { indexRoutes } from "./home";
import { authRoutes } from "../mod";

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, "/">) {
  const apiRoutes = app
    .basePath("/api")
    .route("/", indexRoutes)
    .route("/auth", authRoutes);

  return apiRoutes;
}
