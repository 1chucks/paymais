"use client"

import React, { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import { SessionProvider } from "next-auth/react"

import "../styles/globals.css"

const queryClient = new QueryClient()

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={"light"}>
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {props.children}
          <Toaster className={"bg-primary"} />
        </SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
