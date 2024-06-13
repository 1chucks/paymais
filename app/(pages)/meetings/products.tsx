"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, TextB, TextH } from "@/comps"
import { AppStores, cn } from "@/lib"

import { IAppointmentStatus } from "@/lib/zustand/appointments"

export default function ProductsSection() {
  const router = useRouter()
  const [salesToShow, setSalesToShow] = useState<IAppointmentStatus>("PENDING")

  const state = AppStores.useAppointment()

  const getDate = (dateI: number) => {
    const date = new Date(dateI)

    const readableDate = date.toLocaleDateString("en-US", {})

    return readableDate
  }

  function getList() {
    if (salesToShow === "PENDING") {
      return state.list
    } else {
      return state.list.filter((val, i) => val.status === salesToShow)
    }
  }
  return (
    <div
      className={`
      mt-4  flex flex-col 
      items-center justify-center
      mb-[70px]
    `}
    >
      <div className="flex mb-4 gap-x-2 w-full">
        <Button
          className={"flex-grow bg-amber-500"}
          onClick={() => setSalesToShow("PENDING")}
        >
          Pending
        </Button>
        <Button
          className={"flex-grow bg-pink-600"}
          onClick={() => setSalesToShow("CANCELLED")}
        >
          Canceled
        </Button>
        <Button
          className={"flex-grow bg-green-600"}
          onClick={() => setSalesToShow("COMPLETED")}
        >
          Completed
        </Button>
      </div>
      <div
        className={`
      grid md:grid-cols-3 grid-cols-1
      items-start justify-center 
      w-full mx-0
    `}
      >
        {getList().map((item, i) => (
          <div
            className={"md:mx-4 rounded-md bg-card p-3 mb-2"}
            key={i}
            // onClick={() => router.push(`/products/${i}`)}
          >
            <div className={"w-full flex flex-col"}>
              <div className="flex items-center justify-between">
                <TextH v="h4">{item.name}</TextH>
              </div>
              <hr
                className={cn(
                  "border-4 w-full my-4",
                  item.status === "PENDING" && "border-amber-500",
                  item.status === "COMPLETED" && "border-green-600",
                  item.status === "CANCELLED" && "border-pink-600",
                )}
              />
              <RowText title="Status:" subtitle={item.status} />
              <RowText title="Date:" subtitle={getDate(parseInt(item.date))} />
              <RowText title="Duration:" subtitle={item.duration} />
              {/* <RowText title="Time" subtitle={item.time} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RowText(props: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center justify-between">
      <TextH v="h5">{props.title}</TextH>
      <TextB className={"text-card-foreground"}>{props.subtitle}</TextB>
    </div>
  )
}
