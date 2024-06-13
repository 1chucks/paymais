"use client"

import React from "react"

import { SlidingCarousel } from "../_comps"
import DashboardScreen from "./client"

export default function DashboardPage() {
  return (
    <div className="px-4 py-2 w-full flex flex-col items-center justify-center">
      <SlidingCarousel />
      <DashboardScreen />
    </div>
  )
}
