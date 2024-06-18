"use client"

import { AppStores } from "@/lib"

import EnterPhone from "./1EnterPhone"
import EnterOtp from "./2EnterOtp"
import { EnterPassword } from "./3EnterPassword"
import BvnSuccess from "./5BvnSuccess"

export default function ResetPasswordScreens() {
  const store = AppStores.useResetPassword()

  switch (store.stage) {
    case "EnterPhone":
      return <EnterPhone />
    case "EnterOtp":
      return <EnterOtp />
    case "EnterPassword":
      return <EnterPassword />
    case "BvnSuccess":
      return <BvnSuccess />
    default:
      return <EnterPhone />
  }
}
