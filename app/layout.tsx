import type React from "react"
import type { Metadata } from "next"
import { Comfortaa, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/* Added Comfortaa and Inter fonts */
const comfortaa = Comfortaa({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ParishFlow - Parish Management System",
  description: "Discover and manage parish activities in your community",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${comfortaa.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
