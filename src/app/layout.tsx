import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Navbar from "@/src/components/layout/Navbar"
import Footer from "@/src/components/layout/Footer"
import ScrollToTop from "@/src/components/ui/ScrollToTop"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BBM | Soluciones Digitales",
  description:
    "Desarrollo de software, aplicaciones web y sistemas a la medida",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          flex
          flex-col
          antialiased
        `}
      >
        {/* Navbar (no fija) */}
        <Navbar />

        {/* Contenido */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Botón volver arriba */}
        <ScrollToTop />
      </body>
    </html>
  )
}
