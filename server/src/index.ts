import { Hono } from "hono";
import { logger } from "hono/logger";
import { registerRoutes } from "./routes";
import { cors } from "hono/cors";
// import { registerRoutes } from "@/routes";

const PORT = process.env.PORT || 3000;

const app = new Hono();

app.use("*", cors({ origin: ["http://localhost:3000"] }));
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
