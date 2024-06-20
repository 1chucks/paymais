"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { Button, TextB, TextH } from "@/comps"
import { AppImg, AppPages, cn } from "@/lib"

export default function HomeClient() {
  const router = useRouter()

  return (
    <div
      className={cn(
        `bg-primary
      w-full m-0 p-0 
      flex flex-col 
      justify-end items-center 
      h-screen
    `
      )}
    >
      <div className="mb-[40vh]">
        <img src={AppImg.logoBlue} alt="logo" className="size-[150px]" />
      </div>
      <div
        className={`
        p-4 flex flex-col bg-card
        w-[90%] 
        text-center rounded-xl gap-y-3
        mb-[70px]
      `}
      >
        <TextH v="h1" className={"text-[24px] md:text-[50px]"}>
          Welcome
        </TextH>
        <div className="">
          <TextB v={"p5"}>
            We drive to optimize cluster contribution digitally in order to
            assist civil servants with a seamless way of savings and instant
            loan access.
          </TextB>
        </div>
        <div className={"flex items-center justify-center"}>
          <Button
            onClick={() => {
              router.push(AppPages.signIn)
            }}
          >
            {`Let's Get Started`}
          </Button>
        </div>
      </div>
    </div>
  )
}
