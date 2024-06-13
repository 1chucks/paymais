"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { AppInput, AppLoader, AppModal, Button, Form, TextH } from "@/comps"
import { cn, trpc, useLoader } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { IFormSchema, defaultValues, formSchema } from "./schema"
import styles from "./styles.module.css"

export default function SignUpForm() {
  const router = useRouter()

  const { loadState, showLoad, hideLoad } = useLoader()

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: IFormSchema) {
    // router.push("/dashboard")
  }

  return (
    <div
      className={cn(
        `
    w-full h-[calc(100vh-50px)] 
      flex flex-col items-center justify-center
    `,
        styles.container
      )}
    >
      {loadState && (
        <AppModal>
          <AppLoader />
        </AppModal>
      )}
      <div
        className={`
        w-[90%] flex flex-col gap-y-4 
        items-center justify-center 
        text-center rounded-2xl 
        p-2
      `}
      >
        <div
          className={`
      flex flex-col gap-y-4 w-full px-4 rounded-2xl border-primary 
        border-[1px] bg-slate-300/85 py-2
      `}
        >
          <TextH>Tip a Physician</TextH>
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
                  label="Phone"
                  place="Physician's phone number"
                />
                <AppInput
                  control={form.control}
                  name="amount"
                  label="Amount"
                  type="no"
                  place="Amount you wish to send"
                />

                <Button variant={"default"} type="submit" className="mt-4">
                  Tip
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
