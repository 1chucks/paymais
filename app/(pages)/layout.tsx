import React, { ReactNode } from "react"
import { NavbarHeader } from "@/comps/navbar"

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div className={"bg-background"}>
      <NavbarHeader />
      {props.children}
    </div>
  )
}
