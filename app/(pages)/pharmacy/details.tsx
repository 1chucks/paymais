"use client"

import React from "react"
import { Button, TextB, TextH } from "@/comps"
import { motion } from "framer-motion"
import { toast } from "sonner"

import { HeaderRow } from "./Headrow"
import { IDataList } from "./data"

export default function DetailsSection(props: {
  setShowActiveChat: React.Dispatch<React.SetStateAction<boolean>>
  data: IDataList
}) {
  const onSubmit = () => {
    toast("Added to cart")
  }

  return (
    <motion.div
      initial={{ x: 200, opacity: 0.9 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={`
        fixed top-0 bottom-0 left-0 h-[100vh] 
        bg-background w-full mt-[50px] z-10
    `}
    >
      <HeaderRow
        data={props.data}
        setShowActiveChat={props.setShowActiveChat}
      />

      <div className="w-full">
        <div className="flex flex-col items-center justify-center mt-[30px] mb-[20px]">
          <img
            src={props.data.img}
            className="h-[120px] w-[120px] rounded-[10px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <TextH>{props.data.name}</TextH>
          <TextB className={"text-center  max-w-[80%]"}>
            ₦{props.data.price}
          </TextB>
          <TextB>category: {props.data.department}</TextB>
          {/* <TextB className={"text-center  max-w-[80%]"}>
            {props.data.desc}
          </TextB> */}
        </div>
      </div>

      <div className="w-full my-4 flex items-center justify-center">
        <Button onClick={onSubmit}>Add to cart</Button>
      </div>
    </motion.div>
  )
}
