"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { AppInput, AppSelect, Button, Form, TextH } from "@/comps"
import { cn } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { IFormSchema, defaultValues, formSchema } from "./schema"

export default function SignUpForm() {
  const router = useRouter()
  const [IsClinician, setIsClinician] = useState<boolean>(false)
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {}

  return (
    <div
      className={cn(
        `
    w-full min-h-[calc(100vh-50px)] 
      flex flex-col items-center justify-center
    `
      )}
    >
      <div
        className={`
        w-[90%] flex flex-col 
        items-center justify-center 
        text-center
      `}
      >
        <div
          className={`
      flex flex-col gap-y-4 px-2 
       py-2 w-full
      `}
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
                  name="firstName"
                  label="First name"
                />
                <AppInput
                  control={form.control}
                  name="lastName"
                  label="Last name"
                />
                <Button variant={"default"} type="submit" className="mt-4">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
