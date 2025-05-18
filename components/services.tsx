"use client"

import { useLanguage } from "./language-provider"
import { FadeIn, ScaleIn } from "./animations"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      title: "Reparații TV",
      description: "Reparații profesionale pentru toate tipurile de televizoare, inclusiv LED, LCD, și Smart TV",
      icon: "/images/tv-repair.jpg",
      whatsapp: "https://wa.me/40741318528?text=Bună! Am nevoie de reparație TV."
    },
    {
      title: "Reparații Aparate de Aer Condiționat",
      description: "Reparații complete pentru aparate de aer condiționat, diagnosticare și rezolvare rapidă a problemelor",
      icon: "/images/ac-repair.jpg",
      whatsapp: "https://wa.me/40741318528?text=Bună! Am nevoie de reparație AC."
    },
    {
      title: "Instalare Aparate de Aer Condiționat",
      description: "Instalare profesională a aparatelor de aer condiționat, cu garanție și asistență post-instalare",
      icon: "/images/ac-install.jpg",
      whatsapp: "https://wa.me/40741318528?text=Bună! Am nevoie de instalare AC."
    },
    {
      title: "Curățare Aparate de Aer Condiționat",
      description: "Curățare profesională și mentenanță preventivă pentru aparatele de aer condiționat",
      icon: "/images/ac-cleaning.jpg",
      whatsapp: "https://wa.me/40741318528?text=Bună! Am nevoie de curățare AC."
    },
    {
      title: "Încărcare Freon",
      description: "Încărcare freon și verificare sistem de răcire pentru eficiență maximă",
      icon: "/images/freon.jpg",
      whatsapp: "https://wa.me/40741318528?text=Bună! Am nevoie de încărcare freon."
    },
    {
      title: "Diagnosticare",
      description: "Diagnosticare profesională și evaluare tehnică pentru toate tipurile de aparate",
      icon: "/images/diagnostic.jpg",
      whatsapp: "https://wa.me/40741318528?text=Bună! Am nevoie de diagnosticare."
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services__container">
        <FadeIn>
          <div className="services__header">
            <h2 className="services__title">{t("services.title")}</h2>
            <p className="services__subtitle">{t("services.subtitle")}</p>
          </div>
        </FadeIn>

        <div className="services__grid">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <motion.div
                className="services__card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="services__image-wrapper">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="services__image"
                  />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <motion.a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__card-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="services__card-cta-icon" />
                  {t("services.contactWhatsApp")}
                </motion.a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
} 