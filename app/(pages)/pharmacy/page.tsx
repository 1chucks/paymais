"use client"

import React, { useState } from "react"
import { Button, TextB, TextH } from "@/comps"
import { AppStores } from "@/lib"
import { SearchIcon } from "lucide-react"
import { toast } from "sonner"

import { InputText } from "../_comps"
import { IDataList, dataList } from "./data"
import ChatSection from "./details"

export default function PharmacyPage() {
  const [showActiveChat, setShowActiveChat] = useState(false)
  const [_chatData, setChatData] = useState<IDataList>()
  const state = AppStores.useProductStore()

  function setupModal(data: IDataList) {
    setShowActiveChat(true)
    setChatData(data)
  }

  return (
    <div className="px-2 bg-background">
      <div className="w-full flex items-center justify-center my-2 ">
        <InputText
          Icon={SearchIcon}
          placeH={"Find a Physician"}
          className="w-[80%]"
        />
      </div>
      <div className={"grid grid-cols-2 gap-4 mb-[80px] mt-4"}>
        {dataList.map((val, i) => (
          <div
            key={i}
            className="flex flex-col border-accent bg-card items-start justify-between"
          >
            <div className="">
              <img
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setupModal(val)
                }}
                src={val.img}
                alt="P"
                className="h-[200] w-full rounded-[5px] bg-card"
              />
            </div>
            <div className="flex flex-col justify-around py-2 px-4 w-full">
              <TextH v="h5">{val.name}</TextH>
              <TextB>₦{val.price}</TextB>
            </div>
            <Button
              className={"w-full"}
              onClick={() => {
                state.addToCart({
                  id: i,
                  name: val.name,
                  image: val.img,
                  price: val.price,
                  quantity: 0,
                })
                toast("Added to cart")
              }}
            >
              Add
            </Button>
          </div>
        ))}
      </div>
      {showActiveChat && (
        <ChatSection data={_chatData!} setShowActiveChat={setShowActiveChat} />
      )}
    </div>
  )
}
