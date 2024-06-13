import { Hono } from "hono";
import { db } from "./db";
import { logger } from "hono/logger";
import { registerRoutes } from "@/routes";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const PORT = process.env.PORT || 3000;

const app = new Hono();

app.use("*", logger());

const withRoutes = registerRoutes(app);
export type ApiRoutes = typeof withRoutes;

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});

if (process.env.NODE_ENV === "development") {
  console.log(`Server is running at http://localhost:${PORT}`);
}
