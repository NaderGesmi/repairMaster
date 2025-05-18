"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Instagram, Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BounceButton } from "./animations"

type Language = "ro" | "en" | "ar"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "ro", label: "RO", flag: "🇷🇴" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ar", label: "عربي", flag: "🇸🇦" },
  ]

  const navLinks = [
    { href: "#services", label: t("navbar.services") },
    { href: "#pricing", label: t("navbar.pricing") },
    { href: "#testimonials", label: t("navbar.testimonials") },
    { href: "#contact", label: t("navbar.contact") },
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
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="navbar__link"
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="navbar__actions">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://www.instagram.com/repairversehub"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social"
              aria-label="Visit our Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://www.tiktok.com/@repairversehub"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social"
              aria-label="Visit our TikTok"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
          </motion.div>

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="navbar__mobile-menu-content"
          >
            <div className="navbar__mobile-menu-container">
              <Link href="/" className="navbar__brand">
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
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="navbar__mobile-menu-link"
                  >
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
