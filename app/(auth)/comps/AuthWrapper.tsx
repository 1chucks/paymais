"use client"

import React, { ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import { AppInput, AppSelect, Button, Form, TextH } from "@/comps"
import { AppImg, cn } from "@/lib"
import { motion } from "framer-motion"

export function AuthWrapper(props: { children: ReactNode }) {
  const router = useRouter()
  const [IsClinician, setIsClinician] = useState<boolean>(false)

  return (
    <div
      className={cn(
        `
    w-full flex flex-col items-center justify-center
      bg-background pt-10
    `
      )}
    >
      <div className="my-[50px] ">
        <img
          src={AppImg.logoWhite}
          alt="logo"
          className="size-[100px] rounded-[50px]"
        />
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={`
        w-[90%] flex flex-col 
        items-center justify-center 
        text-center
      `}
      >
        {props.children}
      </motion.div>
    </div>
  )
}
