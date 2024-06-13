import { z } from "zod"

export const formSchema = z.object({
  phone: z.string(),
  amount: z.string(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  amount: "",
}

export type IFormSchema = z.infer<typeof formSchema>
