import React, { ReactNode } from "react"

export function AppModal(props: { children: ReactNode }) {
  return (
    <div
      className={`w-screen h-screen bg-black/20 
      flex items-center justify-center fixed z-40 left-0 top-[50px]
      px-5 py-4`}
    >
      {props.children}
    </div>
  )
}
