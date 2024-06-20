"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { Button, TextH } from "@/comps"
import { AppStores } from "@/lib"

export default function BvnSuccess() {
  const store = AppStores.useSignUp()

  return (
    <AuthWrapper title="BVN Validated Successfully"
    subtitle={`Your password has been validated successfully, 
      please click the button below to continue to your account`}
    >
      <div>
        <Button onClick={() => store.update({ stage: "CreateNew" })}>
        Goto Dashboard
        </Button>
      </div>
    </AuthWrapper>
  )
}
