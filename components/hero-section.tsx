"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-muted" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("hero.title")}</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="font-medium">
                <Link href="#contact">{t("hero.cta")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt={t("hero.imageAlt")}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
