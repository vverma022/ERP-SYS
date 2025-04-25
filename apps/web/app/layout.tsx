import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { ReactQueryClientProvider } from "@/lib/reactqueryprovider"
import { Toaster } from "sonner"


const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactQueryClientProvider>
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
        <footer style={{ textAlign: "center", padding: "1rem 0", marginTop: "2rem", fontSize: "1rem", color: "#666" }}>
          @ 2025 and made with love in India 🇮🇳
        </footer>
        <Toaster richColors />
      </body>
    </html>
    </ReactQueryClientProvider>
  )
}
