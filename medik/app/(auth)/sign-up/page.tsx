"use client"

import React from "react"
import { useMinipay } from "@/sc"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import SignUpForm from "./form"

export default function SignUpPage() {
  // const { account, connected, lookupAddress } = useSocialConnect()
  const { isConnected, walletAddress } = useMinipay()
  if (!isConnected) {
    console.log("walletAddress", walletAddress)
    return (
      <div className={"flex flex-col items-center justify-start w-full"}>
        <div className="mt-[20vh] bg-secondary rounded-2xl p-4">
          <ConnectButton />
        </div>
      </div>
    )
  } else {
    return <SignUpForm walletAddress={walletAddress!} />
  }
}
