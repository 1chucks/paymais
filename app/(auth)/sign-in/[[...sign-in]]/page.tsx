"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AuthWrapper } from "@/(auth)/comps"
import { AppInput, Button, Form, TextB } from "@/comps"
import { AppPages, AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { IFormSchema, defaultValues, formSchema } from "./form"

export default function SignInPage() {
  const store = AppStores.useSignUp()
  const router = useRouter()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    store.update({ stage: "EnterOtp" })
  }

  return (
    <AuthWrapper
      title="Welcome!"
      underButtonText={
        <TextB className={`mt-4`}>
          {`Don’t have a Paymais accoun?`}
          <span
            onClick={() => router.push(AppPages.signUp)}
            className={`text-[#000066]`}
          >
            Sign up
          </span>
        </TextB>
      }
      subtitle={"Fill in your details to sign into your paymais  account"}
      buttonTitle="Continue"
      onButtonClick={() => {
        console.log("Button clicked")
        onSubmit(form.getValues())
      }}
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
            <AppInput
              control={form.control}
              name="referralCode"
              label="Password"
            />
          </div>
          <div className={`text-[#000066] text-end mt-4`}>
            <Link href={AppPages.resetPassword}>
              <TextB className={`text-end pl-52 `}>Forgot your Password?</TextB>
            </Link>
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
