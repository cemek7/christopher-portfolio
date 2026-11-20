import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"

const mulish = localFont({
  src: "../public/fonts/Mulish-latin-var.woff2",
  variable: "--font-mulish",
  weight: "200 1000",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Christopher Ozougwu | Product Engineering & Applied AI",
  description:
    "Christopher Ozougwu builds practical AI products and business software at TechClave, including Booka for customer messaging, booking and commerce.",
  openGraph: {
    title: "Christopher Ozougwu | Product Engineering & Applied AI",
    description: "Product engineering and applied AI at TechClave.",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={mulish.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
