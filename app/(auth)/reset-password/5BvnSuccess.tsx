"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { Button, TextH } from "@/comps"
import { AppStores } from "@/lib"

export default function BvnSuccess() {
  const store = AppStores.useSignUp()

  return (
    <AuthWrapper title="Password  Changed"
    subtitle="Your password has been updated, please sign in to continue to your account">
      <div>
        <Button onClick={() => store.update({ stage: "CreateNew" })}>
          Sign in
        </Button>
      </div>
    </AuthWrapper>
  )
}
