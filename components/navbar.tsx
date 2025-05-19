"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Instagram, Moon, Sun, Menu, X, Home, Wrench, DollarSign, MessageSquare, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BounceButton } from "./animations"

type Language = "ro" | "en" | "ar"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle body class when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "ro", label: "RO", flag: "🇷🇴" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ar", label: "عربي", flag: "🇸🇦" },
  ]

  const navLinks = [
    { href: "#services", label: t("navbar.services"), icon: Wrench },
    { href: "#pricing", label: t("navbar.pricing"), icon: DollarSign },
    { href: "#testimonials", label: t("navbar.testimonials"), icon: MessageSquare },
    { href: "#contact", label: t("navbar.contact"), icon: Phone },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        <div className="flex items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="navbar__brand">
              RepairMaster
            </Link>
          </motion.div>

          <div className="navbar__menu">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="navbar__link"
                >
                  <link.icon className="h-4 w-4 mr-2 inline-block" />
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="navbar__actions">
          <BounceButton
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="navbar__theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </BounceButton>

          <div className="navbar__language" role="navigation" aria-label="Language selection">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`navbar__lang-btn ${language === lang.code ? "navbar__lang-btn--active" : ""}`}
                aria-label={`Switch to ${lang.label} language`}
                aria-current={language === lang.code ? "true" : "false"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="navbar__lang-flag"
                  aria-hidden="true"
                  animate={{ rotate: language === lang.code ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {lang.flag}
                </motion.span>
                <span className="navbar__lang-label">{lang.label}</span>
              </motion.button>
            ))}
          </div>

          <BounceButton
            className="navbar__mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </BounceButton>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="navbar__mobile-menu-content"
          >
            <div className="navbar__mobile-menu-container">
              <Link href="/" className="navbar__brand">
                <Home className="h-5 w-5 mr-2 inline-block" />
                RepairMaster
              </Link>
              <BounceButton
                className="navbar__mobile-menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </BounceButton>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="navbar__mobile-menu-links"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="navbar__mobile-menu-link"
                  >
                    <link.icon className="h-5 w-5 mr-3 inline-block" />
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
