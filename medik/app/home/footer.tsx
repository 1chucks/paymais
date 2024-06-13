"use client"

import React from "react"
import { Github, LinkedinIcon, MailIcon } from "lucide-react"

import { TextB, TextH } from "@/app/comps"

export default function FooterSection() {
  return (
    <div
      className={`
      w-full  py-4 bg-white/45`}
    >
      <div className="flex items-center justify-around w-full">
        <div className={"flex gap-x-4"}>
          <Github />
          <LinkedinIcon />
          <MailIcon />
        </div>
      </div>
    </div>
  )
}
