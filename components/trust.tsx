"use client"

import { useLanguage } from "@/components/language-provider"
import { Award, Shield, Clock, Languages } from "lucide-react"

export function Trust() {
  const { t } = useLanguage()

  const badges = [
    {
      icon: Award,
      title: t("trust.certified"),
      description: t("trust.certifiedDesc"),
    },
    {
      icon: Shield,
      title: t("trust.warranty"),
      description: t("trust.warrantyDesc"),
    },
    {
      icon: Clock,
      title: t("trust.experience"),
      description: t("trust.experienceDesc"),
    },
    {
      icon: Languages,
      title: t("trust.multilingual"),
      description: t("trust.multilingualDesc"),
    },
  ]

  return (
    <section className="trust" id="trust">
      <div className="trust__container">
        <header className="trust__header">
          <h2 className="trust__title">{t("trust.title")}</h2>
          <p className="trust__subtitle">{t("trust.subtitle")}</p>
        </header>

        <div className="trust__grid">
          {badges.map((badge, index) => (
            <article key={index} className="trust__badge">
              <div className="trust__badge-icon-wrapper">
                <badge.icon className="trust__badge-icon" aria-hidden="true" />
              </div>
              <h3 className="trust__badge-title">{badge.title}</h3>
              <p className="trust__badge-description">{badge.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 