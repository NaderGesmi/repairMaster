import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingCTA } from "@/components/floating-cta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RepairMaster - Servicii de Reparații TV și AC",
  description: "Servicii profesionale de reparații pentru televizoare și aparate de aer condiționat. Rezolvăm rapid orice problemă!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingCTA />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
