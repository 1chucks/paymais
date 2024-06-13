"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, TextB, TextH } from "@/comps"
import { cn } from "@/lib"
import { Stethoscope } from "lucide-react"

import FooterSection from "./footer"
import styles from "./styles.module.css"

export default function HomeClient() {
  const router = useRouter()

  return (
    <div
      className={cn(
        `
      w-full m-0 p-0 
      flex flex-col 
      justify-end items-center 
      h-[calc(100vh-50px)]
    `,
        styles.container
      )}
    >
      <div
        className={`
        p-4 flex flex-col bg-card
        w-[80%] 
        text-center rounded-2xl gap-y-3
        mb-12
      `}
      >
        <TextH v="h1" className={"text-[24px] md:text-[50px]"}>
          Healthcare at your doorstep
        </TextH>
        <div className="">
          <TextB v={"p5"}>
            Easy accessibility to
            healthcare professionals. Buy drugs, multivitamins and other 
            medical utilities at an affordable rate.
          </TextB>
        </div>

        <div className={"flex items-center justify-center"}>
          <Button
            onClick={() => {
              router.push("/sign-up")
            }}
          >
            <Stethoscope size={17} className="mr-2" /> Get started
          </Button>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
