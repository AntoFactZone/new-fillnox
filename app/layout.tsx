import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

export const metadata = {
  title: "Flinox - Premium Streaming",
  description: "Watch thousands of TV series and movies with original audio and HD video quality",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
