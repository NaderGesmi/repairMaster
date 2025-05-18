"use client"

import { useLanguage } from "./language-provider"
import { FadeIn, ScaleIn, BounceButton } from "./animations"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export function Pricing() {
  const { t } = useLanguage()

  const pricingData = {
    tv: [
      { service: "Diagnosticare", standard: "100 lei", promo: "50 lei", savings: "50 lei (50%)" },
      { service: "Reparație Placă Principală", standard: "300 lei", promo: "240 lei", savings: "60 lei (20%)" },
      { service: "Reparație Display", standard: "400 lei", promo: "320 lei", savings: "80 lei (20%)" },
      { service: "Reparație Alimentare", standard: "200 lei", promo: "160 lei", savings: "40 lei (20%)" },
    ],
    ac: [
      { service: t("pricing.acCleaning"), standard: "250 lei", promo: "200 lei", savings: "50 lei (20%)" },
      { service: t("pricing.acInstallation"), standard: "450 lei", promo: "360 lei", savings: "90 lei (20%)" },
      { service: t("pricing.freonCheck"), standard: "200 lei", promo: "160 lei", savings: "40 lei (20%)" },
      { service: "Reparație Compresor", standard: "350 lei", promo: "280 lei", savings: "70 lei (20%)" },
    ],
  }

  return (
    <section id="pricing" className="pricing">
      <div className="pricing__container">
        <FadeIn>
          <div className="pricing__header">
            <h2 className="pricing__title">{t("pricing.title")}</h2>
            <p className="pricing__subtitle">{t("pricing.subtitle")}</p>
          </div>
        </FadeIn>

        <div className="pricing__tabs">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            <button className="pricing__tab pricing__tab--active">{t("pricing.tvTab")}</button>
            <button className="pricing__tab">{t("pricing.acTab")}</button>
          </motion.div>
        </div>

        <div className="pricing__table">
          <div className="pricing__table-content">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="pricing__table-header">{t("pricing.service")}</th>
                  <th className="pricing__table-header">{t("pricing.standardPrice")}</th>
                  <th className="pricing__table-header">{t("pricing.promoPrice")}</th>
                  <th className="pricing__table-header">{t("pricing.savings")}</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.tv.map((item, index) => (
                  <motion.tr
                    key={item.service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pricing__table-row"
                  >
                    <td className="pricing__table-cell">{item.service}</td>
                    <td className="pricing__table-cell">
                      <span className="line-through text-muted-foreground">{item.standard}</span>
                    </td>
                    <td className="pricing__table-cell font-bold text-primary">{item.promo}</td>
                    <td className="pricing__table-cell text-green-600">{item.savings}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="pricing__cta">
            <BounceButton
              className="pricing__button"
              onClick={() => window.location.href = "https://wa.me/your-number"}
            >
              {t("pricing.bookNow")}
            </BounceButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="pricing__social">
            <p className="text-center text-lg font-medium mb-4">Urmărește-ne pentru oferte exclusive!</p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://www.instagram.com/repairversehub"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing__social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@repairversehub"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing__social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}