import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PuntoCell Valencia - Calculadora Trade-In",
  description: "Calcula el valor de tu iPhone para parte de pago",
  metadataBase: new URL("https://puntocell.roasmap.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://puntocell.roasmap.com",
    siteName: "PuntoCell Valencia",
    title: "PuntoCell Valencia - Calculadora Trade-In",
    description: "Calcula el valor de tu iPhone para parte de pago en PuntoCell Valencia",
    images: [
      {
        url: "https://puntocell.roasmap.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PuntoCell Valencia - Intercambia tu iPhone",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PuntoCell Valencia - Calculadora Trade-In",
    description: "Calcula el valor de tu iPhone para parte de pago en PuntoCell Valencia",
    images: ["https://puntocell.roasmap.com/og-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
