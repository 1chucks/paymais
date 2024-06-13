"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { AppStores, NavItem, cn } from "@/lib"
import { ShoppingCart, User } from "lucide-react"

import { siteConfig } from "./site"
import { GiMoneyStack, GiPayMoney } from "react-icons/gi"

interface MainNavProps {
  items?: NavItem[]
}

export function NavbarHeader({ items }: MainNavProps) {
  const [hideConnectBtn, setHideConnectBtn] = useState(false)
  const { isSidebarOpen, setIsSidebarOpen } = AppStores.useSettingsStore()
  // const settings = useContext(SettingsContext)
  const router = useRouter()
  const pathName = usePathname()

  function showIcon(): boolean {
    const pathsAgainst = ["/", "/sign-up", "/sign-in"]
    const res = pathsAgainst.filter((val) => val === pathName)

    if (res.length > 0) {
      return false
    }
    return true
  }

  useEffect(() => {
    const w = window as any
    if (w.ethereum && w.ethereum.isMiniPay) {
      setHideConnectBtn(true)
      // connect()
    }
  }, [])

  return (
    <header className="bg-primary sticky top-0 z-20 w-full border-b">
      <div className="container flex h-[50px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block text-primary-foreground font-extrabold">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div className="">
          <div className="flex items-center ">
            {showIcon() && (
              <Link href="/profile">
                <User className="h-[1.5rem] w-[1.3rem] text-primary-foreground" />
              </Link>
            )}
            {pathName === "/pharmacy" && (
              <Link href="/basket">
                <ShoppingCart className="h-[1.5rem] w-[1.3rem] text-primary-foreground ml-3" />
              </Link>
            )}
            {pathName === "/search" && (
              <Link href="/tip">
                <GiMoneyStack className="h-[1.5rem] w-[1.3rem] text-primary-foreground ml-3" />
              </Link>
            )}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
