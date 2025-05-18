"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const services = [
  {
    id: "tv",
    titleKey: "services.tv",
    descriptionKey: "services.tvDesc",
    image: "/images/tv-repair.jpg",
  },
  {
    id: "ac",
    titleKey: "services.ac",
    descriptionKey: "services.acDesc",
    image: "/images/ac-repair.jpg",
  },
  {
    id: "acInstall",
    titleKey: "services.acInstall",
    descriptionKey: "services.acInstallDesc",
    image: "/images/ac-install.jpg",
  },
  {
    id: "acCleaning",
    titleKey: "services.acCleaning",
    descriptionKey: "services.acCleaningDesc",
    image: "/images/ac-cleaning.jpg",
  },
  {
    id: "freon",
    titleKey: "services.freon",
    descriptionKey: "services.freonDesc",
    image: "/images/freon.jpg",
  },
  {
    id: "diagnostics",
    titleKey: "services.diagnostics",
    descriptionKey: "services.diagnosticsDesc",
    image: "/images/diagnostics.jpg",
  },
]

export function ServicesSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={t(service.titleKey)}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground mb-4">{t(service.descriptionKey)}</p>
              <Button
                className="w-full"
                asChild
              >
                <a
                  href="https://wa.me/40741318528"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t("services.contact")}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
