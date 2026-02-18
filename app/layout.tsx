import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, Manrope } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "QUORRA | AI Research Workspace",
    template: "%s | QUORRA",
  },
  description:
    "QUORRA is an AI-powered research workspace for turning scattered sources into structured insights, summaries, and presentations.",
  openGraph: {
    title: "QUORRA | AI Research Workspace",
    description:
      "Turn documents, notes, and media into reliable insights with a modern AI research workflow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QUORRA | AI Research Workspace",
    description: "A modern AI-powered research workspace built with Next.js and TypeScript.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
