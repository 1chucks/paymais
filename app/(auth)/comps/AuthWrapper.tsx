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
    w-full min-h-[calc(100vh-50px)] 
      flex flex-col items-center justify-center
    `
      )}
    >
      <div className="mb-[50px] ">
        <img
          src={AppImg.logoWhite}
          alt="logo"
          className="size-[100px] rounded-[50px]"
        />
      </div>
      <div
        className={`
        w-[90%] flex flex-col 
        items-center justify-center 
        text-center
      `}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {props.children}
        </motion.div>
      </div>
    </div>
  )
}
