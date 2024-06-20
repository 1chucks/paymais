"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { AppInput, AppSelect, Button, Form, TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
  otp: z.string().max(6, { message: "Maximum of 6 number" }).optional(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  otp: "",
}

export type IFormSchema = z.infer<typeof formSchema>

export default function EnterOtp() {
  const store = AppStores.useSignUp()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    store.update({ stage: "EnterPassword" })
  }

  return (
    <AuthWrapper title="Enter OTP"
    subtitle="Enter the 4 digit code that was sent to your mobile number"
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
            <AppInput control={form.control} name="otp" label="OTP" />
            <Button variant={"default"} type="submit" className="mt-4">
              Verify Now
            </Button>
          </div>
          <div className={`mt-4`}>
          <TextB>Didn’t  recieve the OTP? <span className={`text-[#000066]`}>Re-send</span></TextB>
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
