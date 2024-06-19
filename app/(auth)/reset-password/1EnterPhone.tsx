"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { AppInput, Button, Form, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

export default function EnterPhone() {
  const store = AppStores.useSignUp()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    store.update({ stage: "EnterOtp" })
  }

  return (
    <AuthWrapper title="Reset Your Password"
    subtitle="Please enter your mobile number. We will send an OTP to recover your accoun"
    >
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
           
            <Button variant={"default"} type="submit" className="mt-4">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
