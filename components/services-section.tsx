"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tv, Wind, Thermometer, Wrench } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const { t, dir } = useLanguage()

  const services = [
    {
      icon: <Tv className="h-10 w-10 text-primary" />,
      title: t("services.tv.title"),
      description: t("services.tv.description"),
    },
    {
      icon: <Wind className="h-10 w-10 text-primary" />,
      title: t("services.acCleaning.title"),
      description: t("services.acCleaning.description"),
    },
    {
      icon: <Thermometer className="h-10 w-10 text-primary" />,
      title: t("services.acInstallation.title"),
      description: t("services.acInstallation.description"),
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: t("services.freon.title"),
      description: t("services.freon.description"),
    },
  ]

  return (
    <section id="services" className="py-16 bg-background" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("services.title")}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">{t("services.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full">
                  {t("services.details")}
                </Button>
                <Button asChild className="w-full">
                  <Link href="#contact">{t("services.book")}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
