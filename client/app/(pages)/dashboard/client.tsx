import React from "react"
import { TextB, TextH } from "@/comps"
import { AppImg } from "@/lib"
import { SearchIcon } from "lucide-react"

import { BlueCard } from "./blueCard"
import { dataQuickActions, serviceData } from "./service"

export default function DashboardScreen() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-4 mb-[80px]">
      <div className="w-full mb-4">
        <TextH v="h4" className={"text-card-foreground mb-2"}>
          Our services
        </TextH>
        <div className={"flex items-center justify-between gap-x-2 w-full"}>
          {serviceData.map((val, i) => {
            const { Icon } = val
            return (
              <div
                key={i}
                className={"w-full text-center flex flex-col items-center"}
              >
                <div
                  className={`w-full h-[50px] bg-card 
                    rounded-xl flex
                    items-center justify-center mb-2`}
                >
                  <Icon className={"text-primary font-extrabold"} size={22} />
                </div>
                <TextB v="p5"> {val.title}</TextB>
              </div>
            )
          })}
        </div>
      </div>
      <BlueCard />
      <div className="w-full">
        <TextH v="h4" className={"text-card-foreground mb-2"}>
          Quick actions
        </TextH>
        <div
          className={`
        grid grid-cols-2 gap-x-4 gap-y-4 w-full
      `}
        >
          {dataQuickActions.map((val, i) => (
            <div
              key={i}
              className={
                "w-full flex flex-col items-center"
              }
            >
              <div className={`bg-card 
              w-full flex flex-col 
              items-center justify-center
              rounded-2xl p-3 mb-2`}>
                <img src={val.icon} className={"w-[100px] h-[100px]"} />
              </div>
              <TextB>{val.title}</TextB>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
