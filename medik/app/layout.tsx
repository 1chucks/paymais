import "@/lib/styles/globals.css"
// import "@rainbow-me/rainbowkit/styles.css"
import { AppProviders, cn, fontSans } from "@/lib"
import { NavbarHeader } from "./comps/navbar"

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
