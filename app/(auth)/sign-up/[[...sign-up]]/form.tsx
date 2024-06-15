"use client"

import { AppStores } from "@/lib"

import CreateNew from "./1createNew"
import EnterOtp from "./2EnterOtp"
import { EnterPassword } from "./3EnterPassword"
import EnterBvn from "./4EnterBvn"
import BvnSuccess from "./5BvnSuccess"

export default function SignUpForm() {
  const store = AppStores.useSignUp()

  switch (store.stage) {
    case "CreateNew":
      return <CreateNew />
    case "EnterOtp":
      return <EnterOtp />
    case "EnterPassword":
      return <EnterPassword />
    case "EnterBvn":
      return <EnterBvn />
    case "BvnSuccess":
      return <BvnSuccess />
    default:
      return <CreateNew />
  }
}
