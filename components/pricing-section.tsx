"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export function PricingSection() {
  const { t, dir } = useLanguage()

  const tvPricing = [
    { size: '32"', standard: "250 lei", promo: "198 lei", savings: "52 lei (20%)" },
    { size: '43"', standard: "350 lei", promo: "280 lei", savings: "70 lei (20%)" },
    { size: '50"', standard: "450 lei", promo: "360 lei", savings: "90 lei (20%)" },
    { size: '55"', standard: "550 lei", promo: "440 lei", savings: "110 lei (20%)" },
  ]

  const acPricing = [
    { service: t("pricing.acCleaning"), price: "250 lei", promo: "200 lei", savings: "50 lei (20%)" },
    { service: t("pricing.acInstallation"), price: "450 lei", promo: "360 lei", savings: "90 lei (20%)" },
    { service: t("pricing.freonCheck"), price: "200 lei", promo: "160 lei", savings: "40 lei (20%)" },
  ]

  return (
    <section id="pricing" className="py-16 bg-muted" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("pricing.title")}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">{t("pricing.subtitle")}</p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultValue="tv" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tv">{t("pricing.tvTab")}</TabsTrigger>
              <TabsTrigger value="ac">{t("pricing.acTab")}</TabsTrigger>
            </TabsList>
            <TabsContent value="tv" className="mt-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("pricing.size")}</TableHead>
                      <TableHead>{t("pricing.standardPrice")}</TableHead>
                      <TableHead>{t("pricing.promoPrice")}</TableHead>
                      <TableHead>{t("pricing.savings")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tvPricing.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.size}</TableCell>
                        <TableCell>{item.standard}</TableCell>
                        <TableCell className="font-medium">{item.promo}</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400">{item.savings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="p-4 flex justify-center">
                  <Button asChild>
                    <Link href="#contact">{t("pricing.bookNow")}</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ac" className="mt-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("pricing.service")}</TableHead>
                      <TableHead>{t("pricing.standardPrice")}</TableHead>
                      <TableHead>{t("pricing.promoPrice")}</TableHead>
                      <TableHead>{t("pricing.savings")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {acPricing.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.service}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell className="font-medium">{item.promo}</TableCell>
                        <TableCell className="text-green-600 dark:text-green-400">{item.savings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="p-4 flex justify-center">
                  <Button asChild>
                    <Link href="#contact">{t("pricing.bookNow")}</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
