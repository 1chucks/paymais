import { Hono } from "hono";
import { db } from "./db";
import { logger } from "hono/logger";
import { authRoutes, indexRoutes } from "./routes";

const PORT = process.env.PORT || 3000;

const app = new Hono();

app.use("*", logger());

app.route("/", indexRoutes);
app.route("/auth", authRoutes);

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});

if (process.env.NODE_ENV === "development") {
  console.log(`Server is running at http://localhost:${PORT}`);
}
