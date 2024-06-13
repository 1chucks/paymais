"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { AppInput, AppSelect, Button, Form, TextH } from "@/comps"
import { cn } from "@/lib"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { IFormSchema, defaultValues, formSchema } from "./schema"
import styles from "./styles.module.css"

export default function SignUpForm() {
  const router = useRouter()

  const [IsMale, setIsMale] = useState<boolean>(true)
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
    `,
        styles.container
      )}
    >
      <div
        className={`
        w-[90%] flex flex-col gap-y-4 
        items-center justify-center 
        text-center rounded-2xl mt-[50px]
        p-2
      `}
      >
        <div
          className={`
      flex flex-col gap-y-4 w-full px-4 rounded-2xl border-primary 
        border-[1px] bg-slate-300/85 py-2
      `}
        >
          <TextH>Register with us</TextH>
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
                <AppInput control={form.control} name="email" label="Email" />
                <AppInput control={form.control} name="phone" label="Phone" />
                <AppInput
                  control={form.control}
                  name="age"
                  label="Age"
                  type="no"
                />
                <AppInput
                  control={form.control}
                  name="allergies"
                  label="Allergies"
                />

                <AppSelect
                  label={"Gender"}
                  onChange={(e) => {
                    if (e.target.value == "MALE") {
                      setIsMale(true)
                    } else {
                      setIsMale(false)
                    }
                  }}
                  data={[
                    { title: "Male", value: "MALE" },
                    { title: "Female", value: "FEMALE" },
                  ]}
                />
                <AppSelect
                  label={"Are you a clinician?"}
                  onChange={(e) => {
                    if (e.target.value === "YES") {
                      setIsClinician(true)
                    } else {
                      setIsClinician(false)
                    }
                  }}
                  data={[
                    { title: "No", value: "NO" },
                    { title: "Yes", value: "YES" },
                  ]}
                />
                {IsClinician && (
                  <AppSelect
                    label={"Department"}
                    onChange={(e) => {}}
                    data={[
                      { title: "Doctor", value: "DOCTOR" },
                      { title: "Nurse", value: "NURSE" },
                      { title: "Pharmacist", value: "PHARMACIST" },
                      { title: "Therapist", value: "THERAPIST" },
                      { title: "Dentist", value: "DENTIST" },
                      { title: "Dentist", value: "PHYSIO" },
                      { title: "Dentist", value: "PEADIATRICS" },
                      { title: "Dentist", value: "EMERGENCY" },
                    ]}
                  />
                )}
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
