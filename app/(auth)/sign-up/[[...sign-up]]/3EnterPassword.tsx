"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { AppInput, AppSelect, Button, Form, TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  password: "",
  confirmPassword: "",
}

export type IFormSchema = z.infer<typeof formSchema>

export function EnterPassword() {
  const store = AppStores.useSignUp()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    store.update({ stage: "EnterBvn" })
  }

  return (
    <AuthWrapper title="Create Password"
    subtitle={"Please ensure you use the mobile number that is attached to your BVN"}
    underButtonText ={(<TextB className={`mt-4`}>Already have a Paymais account?
      <span className={`text-[#000066]`}>Sign in</span></TextB>)}
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
            <AppInput control={form.control} name="password" label="Password" />
            <AppInput
              control={form.control}
              name="confirmPassword"
              label="Retype password"
            />

          <div className={`grid grid-cols-2 mt-4`}>
          <TextB className={`mb-2`}>One lower case character</TextB>
          <TextB className={`mb-2`}>One special character</TextB>
          <TextB className={`mb-2`}>One upper case character</TextB>
          <TextB className={`mb-2`}>8 minimum character</TextB>
          <TextB className={`mb-2`}>One number</TextB>
          
          </div>

            <Button variant={"default"} type="submit" className="mt-4">
              Continue
            </Button>
          </div>
          
        </form>
      </Form>
    </AuthWrapper>
  )
}
