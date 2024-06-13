"use client"

import { useState } from "react"

export function useLoader() {
  const [loadState, setShow] = useState<boolean>(false)

  const showLoad = () => setShow(true)
  const hideLoad = () => setShow(false)
  const toggleLoader = () => setShow((prev) => !prev)

  return { showLoad, toggleLoader, hideLoad, loadState }
}
