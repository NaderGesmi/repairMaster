"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Phone, MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react"

export function Footer() {
  const { t, dir } = useLanguage()

  const services = [
    { name: t("services.tv"), href: "#services" },
    { name: t("services.ac"), href: "#services" },
    { name: t("services.acInstall"), href: "#services" },
    { name: t("services.acCleaning"), href: "#services" },
    { name: t("services.freon"), href: "#services" },
    { name: t("services.diagnostics"), href: "#services" },
  ]

  const quickLinks = [
    { name: t("navbar.services"), href: "#services" },
    { name: t("navbar.pricing"), href: "#pricing" },
    { name: t("navbar.testimonials"), href: "#testimonials" },
    { name: t("navbar.contact"), href: "#contact" },
  ]

  return (
    <footer className="bg-muted border-t" dir={dir}>
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RepairMaster</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/repairversehub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@repairversehub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("services.title")}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+40741318528"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  +40 741 318 528
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
                <a
                  href="https://wa.me/40741318528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:contact@repairmaster.ro"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  contact@repairmaster.ro
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {t("footer.location")}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {t("footer.workingHours")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RepairMaster. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
