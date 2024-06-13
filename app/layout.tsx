import "@/lib/styles/globals.css"
import { Metadata, Viewport } from "next"
import { AppProviders, cn, fontSans } from "@/lib"

import { appMetadata } from "./app"
import { NavbarHeader } from "./comps/navbar"

export const metadata: Metadata = {
  ...appMetadata,
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="no-scrollbar overscroll-none"
    >
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased no-scrollbar overscroll-none",
          fontSans.variable
        )}
      >
        <AppProviders>
          <div className="relative flex min-h-screen flex-col bg-background">
            <div className="flex-1">
              <NavbarHeader />
              {children}
            </div>
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
