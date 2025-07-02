import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SupabaseProvider } from "@/components/supabase-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Job Hub - AI-Powered Job Application Tracker",
  description: "AI Job Hub helps you automatically track and analyze your job applications across email, LinkedIn, and more. Secure, private, and powered by AI.",
  openGraph: {
    title: "AI Job Hub",
    description: "AI Job Hub helps you automatically track and analyze your job applications across email, LinkedIn, and more. Secure, private, and powered by AI.",
  },
  twitter: {
    title: "AI Job Hub",
    description: "AI Job Hub helps you automatically track and analyze your job applications across email, LinkedIn, and more. Secure, private, and powered by AI.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
