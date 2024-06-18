"use client"

import React, { JSXElementConstructor, ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import { AppInput, AppSelect, Button, Form, TextB, TextH , } from "@/comps"
import { AppImg, cn } from "@/lib"
import { motion } from "framer-motion"

export function AuthWrapper(props: { children: ReactNode; title?:string; subtitle?:string; underButtonText?:JSX.Element; buttonTitle?:string;  onButtonClick?: VoidFunction }) {

  const router = useRouter()
  const [IsClinician, setIsClinician] = useState<boolean>(false)

  return (
    <div
      className={cn(
        `
    w-full flex flex-col items-center
      bg-background pt-10  relative h-screen
    `
      )}
    >
      <div className="my-[50px] ">
        <img
          src={AppImg.logoWhite}
          alt="logo"
          className="size-[100px] "
        />
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={`
        w-[90%] flex flex-col 
        items-center justify-center 
        text-center
      `}
      >
        <div className="w-[70%]">
          <TextH v="h3">{props.title}</TextH>
          <TextB className={`my-4 text-center`}>{props.subtitle}</TextB>
        </div>
        {props.children}
       <div className="w-full flex items-center justify-center">
     {props.buttonTitle &&   <Button variant={"default"} type="submit" className="mt-4 w-[80%]" onClick={props.onButtonClick}>
              {props.buttonTitle}
            </Button>}
            
       </div>
       <div>
       {props.underButtonText && props.underButtonText}
       
       </div>

        <div className="absolute bottom-10 w-[60%]">
          <TextB>By clicking on continue, you accept our <span className={`text-[#000066]`}>Terms of Service</span> and <span className={`text-[#000066]`}> Privacy Policy</span></TextB>
        </div>
      </motion.div>
    </div>
  )
}
