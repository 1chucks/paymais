"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { InputText } from "@/(pages)/_comps"
import { Button, TextB, TextH } from "@/comps"
import { cn } from "@/lib"

import styles from "./styles.module.css"

export default function SignInPage() {
  const router = useRouter()

  const handleSubmit = () => {}

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
      <div
        className={`
        w-[70%] flex flex-col gap-y-4 
        items-center justify-center 
        text-center rounded-2xl bg-background
        p-3
      `}
      >
        <TextH>Register with us</TextH>
        <TextB v="p4">Have free access to over 100 physicians</TextB>
        <div
          className={`
      flex flex-col gap-y-4 w-full
        py-6 px-4 rounded-2xl border-primary border-[1px]
      `}
        >
          <InputText placeH={"First name"} />
          <InputText placeH={"Last name"} />
          <InputText placeH={"Email"} />
          <InputText placeH={"Age"} />
          <InputText placeH={"Allergies"} />
          <InputText placeH={"Is Male"} />
          <InputText placeH={"Country"} />
          <InputText placeH={"Department"} />
          <Button onClick={() => router.push("/dashboard")}> Register</Button>
        </div>
      </div>
    </div>
  )
}
