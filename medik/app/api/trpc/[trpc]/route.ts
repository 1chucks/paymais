import { appRouter, createTRPCContext } from "@/server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // createContext: () => ({}),
    createContext: () => createTRPCContext(),
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        // send to bug reporting
      }
    },
  })
}

export { handler as GET, handler as POST }
