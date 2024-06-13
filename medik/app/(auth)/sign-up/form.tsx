"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AppInput, AppSelect, Button, Form, TextH } from "@/comps";
import { cn, trpc } from "@/lib";
import { SCUtils } from "@/sc";
import { zodResolver } from "@hookform/resolvers/zod";
import { $Enums } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";



import { IFormSchema, defaultValues, formSchema } from "./schema";
import styles from "./styles.module.css";


export default function SignUpForm(props: { walletAddress: `0x${string}` }) {
  const router = useRouter()
  const [category, setCategory] = useState<$Enums.DEPARTMENT | undefined>()
  const [IsMale, setIsMale] = useState<boolean>(true)
  const [IsClinician, setIsClinician] = useState<boolean>(false)
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })
  const t = trpc.user.registerUser.useMutation()

  async function onSubmit(values: IFormSchema) {
    // router.push("/dashboard")
    try {
      const addressExist = await SCUtils.lookupAddress(
        values.phone,
        props.walletAddress
      )
      console.log("addressExist:", addressExist)
      if (addressExist) {
        // await t.mutateAsync({
        //   email: values.email,
        //   firstName: values.firstName,
        //   lastName: values.lastName,
        //   allergies: values.allergies,
        //   isMale: IsMale,
        //   age: parseInt(values.age),
        //   walletAddress: "",
        //   isClinician: IsClinician,
        //   department: category,
        // })
        toast.success("Account created!")
        router.push("/dashboard")
      } else {
        await SCUtils.register(values.email, props.walletAddress)
        toast.success("Registered on social connect!")
        // await t.mutateAsync({
        //   email: values.email,
        //   firstName: values.firstName,
        //   lastName: values.lastName,
        //   allergies: values.allergies,
        //   isMale: IsMale,
        //   age: parseInt(values.age),
        //   walletAddress: "",
        //   isClinician: IsClinician,
        //   department: category,
        // })
        toast.success("Account created!")
        router.push("/dashboard")
      }
    } catch (error) {
      toast.error("oops an error occured")
      console.log("SignUp Error", error)
    }
  }

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
                      setCategory(undefined)
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
                    onChange={(e) => {
                      setCategory(e.target.value as $Enums.DEPARTMENT)
                    }}
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