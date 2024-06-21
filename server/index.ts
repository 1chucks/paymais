import { registerRoutes } from "@/server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { jwt, type JwtVariables } from "hono/jwt"
import { logger } from "hono/logger"

export * from "./routes"

// export const runtime = "edge"

const app = new Hono()

app.use("*", cors({ origin: ["http://localhost:3000"] }))
app.use("*", logger())
// app.use(
//   "/auth/*",
//   jwt({
//     secret: "it-is-very-secret",
//   })
// )

const routes = registerRoutes(app)

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

const port = 5550
console.log(`Server is running on port ${port}`)

Bun.serve({
  port,
  fetch: app.fetch,
})

export type AppType = typeof routes
