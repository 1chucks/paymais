import { publicProcedure, router } from "@/server"
import { z } from "zod"

export const ordersRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.orders.findMany()
  }),

  delete: publicProcedure
    .input(z.object({ blog_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.orders.delete({
        where: {
          id: input.blog_id,
        },
      })
    }),
})

