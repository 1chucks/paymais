import "@/lib/styles/globals.css"
import { Metadata, Viewport } from "next"
// import "@rainbow-me/rainbowkit/styles.css"
import { AppProviders, cn, fontSans } from "@/lib"

import { NavbarHeader } from "./comps/navbar"

const APP_NAME = "NJS App"
const APP_DESCRIPTION = "Next.js + Serwist PWA"

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
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
