"use client"

import React from "react"
import { AuthWrapper } from "@/(auth)/comps"
import { Button, TextH } from "@/comps"
import { AppStores } from "@/lib"

export default function BvnSuccess() {
  const store = AppStores.useSignUp()

  return (
    <AuthWrapper>
      <div>
        <Button onClick={() => store.update({ stage: "CreateNew" })}>
          Success
        </Button>
      </div>
    </AuthWrapper>
  )
}
