"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { AppInput, Button, Form, TextB } from "@/comps"
import { AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
  referralCode: z
    .string()
    .max(6, { message: "Maximum of 6 number" })
    .optional(),
  phone: z.string() .optional(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  referralCode: "",
}

export type IFormSchema = z.infer<typeof formSchema>

export default function CreateNew() {
  const store = AppStores.useSignUp()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    store.update({ stage: "EnterOtp" })
  }

  return (
    <AuthWrapper title="Create New Account" 
    underButtonText ={(<TextB className={`mt-4`}>Already have a Paymais account? <span className={`text-[#000066]`}>Sign in</span></TextB>)}
    subtitle={"Please ensure you use the mobile number that is attached to your BVN"} 
    buttonTitle="Continue" onButtonClick={() => {console.log("Button clicked"); 
    onSubmit(form.getValues);
    }}>
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
          
          </div>
          <div>
            
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
