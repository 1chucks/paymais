"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { AppInput, AppSelect, Button, Form, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
  bvn: z.string().max(10, { message: "Maximum of 6 number" }).optional(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  bvn: "",
}

export type IFormSchema = z.infer<typeof formSchema>

export default function EnterBvn() {
  const store = AppStores.useSignUp()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    store.update({ stage: "BvnSuccess" })
  }

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
            <AppInput control={form.control} name="bvn" label="Enter BVN" />
            <Button variant={"default"} type="submit" className="mt-4">
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </AuthWrapper>
  )
}
