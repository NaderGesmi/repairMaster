"use client"

import { useLanguage } from "@/components/language-provider"

export function Location() {
  const { t } = useLanguage()

  return (
    <section className="location" id="location">
      <div className="location__container">
        <header className="location__header">
          <h2 className="location__title">{t("location.title")}</h2>
          <p className="location__subtitle">{t("location.subtitle")}</p>
        </header>

        <div className="location__map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.899790357016!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4d5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sro!4v1620000000000!5m2!1sen!2sro"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("location.mapTitle")}
            aria-label={t("location.mapDescription")}
            className="location__map"
          />
        </div>

        <div className="location__info">
          <p className="location__address">{t("location.address")}</p>
          <a
            href="https://maps.google.com/?q=Bucharest,Romania"
            target="_blank"
            rel="noopener noreferrer"
            className="location__directions"
          >
            {t("location.getDirections")}
          </a>
        </div>
      </div>
    </section>
  )
} 