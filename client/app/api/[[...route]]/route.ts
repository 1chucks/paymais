import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { handle } from "hono/vercel"

import { registerRoutes } from "./routes"

export const runtime = "edge"

const app = new Hono()

app.use("*", cors({ origin: ["http://localhost:3000"] }))
app.use("*", logger())

registerRoutes(app)

export const GET = handle(app)
export const POST = handle(app)
