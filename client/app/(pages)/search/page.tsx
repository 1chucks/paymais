"use client"

import React, { useState } from "react"
import { TextB, TextH } from "@/comps"
import { SearchIcon } from "lucide-react"

import { InputText } from "../_comps"
import ChatSection from "./InfoSection"
import { IChatData, chatData } from "./chatData"

export default function ChatPage() {
  const [showActiveChat, setShowActiveChat] = useState(false)
  const [_chatData, setChatData] = useState<IChatData>()

  function setupModal(data: IChatData) {
    setShowActiveChat(true)
    setChatData(data)
  }

  return (
    <div className="px-2">
      <div className="w-full flex items-center justify-center my-2 ">
        <InputText Icon={SearchIcon} placeH={"Find a Physician"} className="w-[80%]" />
      </div>
      {chatData.map((val, i) => (
        <div
          key={i}
          className="flex border-accent py-4 px-3"
          onClick={() => setupModal(val)}
        >
          <div className="mr-[20px]">
            <img src={val.img} alt="P"
              className="size-[50px] rounded-[5px]" />
          </div>
          <div className="flex flex-col justify-around">
            <TextH v="h5">{val.name}</TextH>
            <TextB>{val.department}</TextB>
          </div>
        </div>
      ))}
      {showActiveChat && (
        <ChatSection data={_chatData!} setShowActiveChat={setShowActiveChat} />
      )}
    </div>
  )
}
