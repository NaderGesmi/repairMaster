"use client"

import { useLanguage } from "./language-provider"
import { FadeIn, BounceButton } from "./animations"
import { motion } from "framer-motion"
import { Instagram, Phone } from "lucide-react"

export function SocialProof() {
  const { t } = useLanguage()

  return (
    <section className="social-proof">
      <div className="social-proof__container">
        <FadeIn>
          <div className="social-proof__header">
            <h2 className="social-proof__title">{t("socialProof.title")}</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="social-proof__content">
            <div className="social-proof__social">
              <motion.a
                href="https://www.instagram.com/repairversehub"
                target="_blank"
                rel="noopener noreferrer"
                className="social-proof__link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="social-proof__icon" />
                <span>@repairversehub</span>
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/@repairversehub"
                target="_blank"
                rel="noopener noreferrer"
                className="social-proof__link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="social-proof__icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span>@repairversehub</span>
              </motion.a>
            </div>

            <div className="social-proof__cta">
              <h3 className="social-proof__cta-title">{t("socialProof.needFast")}</h3>
              <p className="social-proof__cta-text">{t("socialProof.callUs")}</p>
              <BounceButton
                className="social-proof__phone"
                onClick={() => window.location.href = "tel:+40741318528"}
              >
                <Phone className="h-5 w-5 mr-2" />
                +40 741 318 528
              </BounceButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
