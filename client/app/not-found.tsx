"use client"

import Link from "next/link"

import { Button, TextB, TextH } from "./comps"

export default function NotFound() {
  return (
    <div className={"w-full flex items-center justify-center h-screen"}>
      <div className="flex flex-col items-center">
        <TextH  className="mb-4">Not Found</TextH>
        <TextB className="mb-4"> Could not find requested resource</TextB>
        <Link href="/" >
          <Button> Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
