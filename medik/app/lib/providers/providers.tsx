"use client"

import React, { ReactNode } from "react"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import { celo, celoAlfajores, } from "wagmi/chains"

import { TrpcProvider } from "./trpcProvider"
import "@rainbow-me/rainbowkit/styles.css"
import { SessionProvider } from "next-auth/react"
import { WagmiProvider, http } from "wagmi"

import "../styles/globals.css"

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string

const rainbowConfig = getDefaultConfig({
  appName: "KampusKonnect",
  projectId: projectId,
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
})

const queryClient = new QueryClient()

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={"light"} >
    {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <WagmiProvider config={rainbowConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <SessionProvider>
              <TrpcProvider>
                {props.children}
                <Toaster className={"bg-primary"} />
              </TrpcProvider>
            </SessionProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
