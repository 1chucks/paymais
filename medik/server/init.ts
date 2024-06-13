import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { createInnerTRPCContext } from "./context";

// export const t = initTRPC.create();

const t = initTRPC.context<typeof createInnerTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
