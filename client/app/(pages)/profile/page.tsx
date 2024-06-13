"use client"
import React from "react"
import { TextB, TextH } from "@/comps"
import { AppImg, cn } from "@/lib"

import { _dataList } from "./_data"

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={
          "size-[80px] rounded-[40px] bg-primary flex items-center justify-center my-8"
        }
      >
        <img src={AppImg.person} className="size-[50px] rounded-[30px]" />
      </div>

      <div className="w-[80%] flex flex-col items-center">
        {_dataList.map((Val, i) => (
          <div key={i} className="flex justify-between py-2 px-3 w-full bg-card mb-2 rounded-md">
            <div className="flex items-center">
              <div className="flex flex-col justify-around">
                <TextH v="h5">{Val.title} </TextH>
              </div>
            </div>
            <div className="flex flex-col justify-around items-end">
              <TextB>{Val.info} </TextB>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
