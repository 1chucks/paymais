import { publicProcedure, router } from "@/server";
import { $Enums } from "@prisma/client";
import { z } from "zod";





export const userRouter = router({
  getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.user.findFirst({
        where: {
          id: input.id,
        },
      })
    }),

  registerUser: publicProcedure
    .input(
      z.object({
        email: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        walletAddress: z.string(),
        age: z.number(),
        allergies: z.string(),
        country: z.string().optional(),
        isMale: z.boolean(),
        isClinician: z.boolean(),
        department: z.nativeEnum($Enums.DEPARTMENT).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.create({
        data: {
          isClinician: input.isClinician,
          email: input.email,
          lastname: input.lastName,
          wallet_address: input.walletAddress,
          firstname: input.firstName,
          age: input.age,
          allergies: input.allergies,
          country: input.country,
          isMale: input.isMale,
        },
      })
    }),
})