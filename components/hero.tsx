"use client"

import { useLanguage } from "./language-provider"
import { FadeIn, ScaleIn, BounceButton } from "./animations"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Clock, Shield, Zap, Languages, Stethoscope } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export function Hero() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Clock,
      text: "Serviciu Rapid",
      animation: {
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        transition: { type: "spring", stiffness: 260, damping: 20 }
      }
    },
    {
      icon: Shield,
      text: "Garanție",
      animation: {
        initial: { scale: 0, rotate: 180 },
        animate: { scale: 1, rotate: 0 },
        transition: { type: "spring", stiffness: 260, damping: 20 }
      }
    },
    {
      icon: Zap,
      text: "Profesioniști",
      animation: {
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        transition: { type: "spring", stiffness: 260, damping: 20 }
      }
    }
  ]

  const languages = [
    { code: "ro", flag: "🇷🇴", name: "Română" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "ar", flag: "🇸🇦", name: "العربية" }
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            {t("hero.title")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-lg text-gray-600"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            <Button size="lg" className="w-full sm:w-auto">
              {t("hero.cta")}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              {t("hero.ctaSecondary")}
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            <p className="text-sm text-gray-500">{t("hero.languages")}</p>
            <p className="text-sm text-gray-500">{t("hero.diagnostic")}</p>
            <p className="text-sm font-medium text-primary">{t("hero.availability")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 