import { Hono } from "hono";
import { BlankEnv, BlankSchema } from "hono/types";
import { authRoutes } from "@/mod";
import { indexRoutes } from "./home";

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, "/">) {
  const apiRoutes = app
    .basePath("/api")
    .route("/", indexRoutes)
    .route("/auth", authRoutes);

  return apiRoutes;
}
