import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Madhav - AI & Data Science Portfolio",
  description: "Portfolio of Madhav, a B.Tech student specializing in Artificial Intelligence and Data Science",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

