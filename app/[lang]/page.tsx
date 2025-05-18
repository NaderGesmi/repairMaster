"use client"

import { useLanguage } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Trust } from "@/components/trust"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Location } from "@/components/location"
import { SocialProof } from "@/components/social-proof"
import { Footer } from "@/components/footer"

export default function Home() {
  const { dir } = useLanguage()

  return (
    <div className="min-h-screen" dir={dir}>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <header className="header">
        <Navbar />
      </header>

      <main id="main-content" className="main">
        <Hero />
        <Services />
        <Trust />
        <Testimonials />
        <Pricing />
        <Contact />
        <Location />
        <SocialProof />
      </main>

      <Footer />
    </div>
  )
} 