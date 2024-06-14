"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { Button, TextB, TextH } from "@/comps"
import { cn } from "@/lib"

export default function SignInPage() {
  const router = useRouter()

  const handleSubmit = () => {}

  return (
    <div
      className={cn(
        `
    w-full h-[calc(100vh-50px)] 
      flex flex-col items-center justify-center
    `
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
          <Button onClick={() => router.push("/dashboard")}> Register</Button>
        </div>
      </div>
    </div>
  )
}
