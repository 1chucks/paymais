"use client"

import React from "react"
import { AppInput, AppSelect, Button, Form, TextH } from "@/comps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AuthWrapper } from "@/(auth)/comps"

export const formSchema = z.object({
  referralCode: z
    .string()
    .max(6, { message: "Maximum of 6 number" })
    .optional(),
  phone: z.string(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  referralCode: "",
}

export type IFormSchema = z.infer<typeof formSchema>

export default function EnterBvn() {
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {}

  return (
    <AuthWrapper>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`
            w-full flex flex-col 
            items-center 
            justify-center 
            my-4
        `}
        >
          <div className={"w-[95%] space-y-4 flex flex-col"}>
            <AppInput
              control={form.control}
              name="phone"
              label="Mobile number"
            />
            <AppInput
              control={form.control}
              name="referralCode"
              label="Referral code(optional)"
            />
            <Button variant={"default"} type="submit" className="mt-4">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
