import { publicProcedure, router } from "@/server"
import { $Enums } from "@prisma/client"
import { z } from "zod"

export const appointmentRouter = router({
  getAll: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.appointment.findFirst({
        where: {
          user_id: input.userId,
        },
      })
    }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.appointment.findFirst({
        where: {
          id: input.id,
          user_id: input.id,
        },
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        userId: z.string(),
        clinicianId: z.string(),
        status: z.nativeEnum($Enums.APPOINTMENT_STATUS),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.appointment.create({
        data: {
          status: input.status,
          title: input.title,
          user_id: input.userId,
          clinician_id: input.clinicianId,
        },
      })
    }),
  update: publicProcedure
    .input(
      z.object({
        appointmentId: z.string(),
        status: z.nativeEnum($Enums.APPOINTMENT_STATUS),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.appointment.update({
        where: {
          id: input.appointmentId,
        },
        data: {
          status: input.status,
        },
      })
    }),
})
