import { z } from "zod"

export const formSchema = z.object({
  referralCode: z
    .string()
    .max(6, { message: "Maximum of 6 number" })
    .optional(),
  phone: z.string().optional(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  referralCode: "",
}

export type IFormSchema = z.infer<typeof formSchema>
