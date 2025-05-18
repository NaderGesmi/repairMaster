"use client"

import { useLanguage } from "@/components/language-provider"
import { InstagramIcon as BrandTiktok, InstagramIcon as BrandInstagram } from "lucide-react"

export function SocialProof() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-12 bg-muted" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-xl font-medium">{t("socialProof.title")}</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <BrandTiktok className="h-6 w-6" />
              <span className="text-sm font-medium">TikTok @repairversehub</span>
            </div>
            <div className="flex items-center gap-2">
              <BrandInstagram className="h-6 w-6" />
              <span className="text-sm font-medium">Instagram @repairversehub</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold">{t("socialProof.needFast")}</h3>
          <p className="mt-2">{t("socialProof.callUs")}</p>
          <p className="mt-2 text-xl font-bold">📞 +40 741 318 528</p>
        </div>
      </div>
    </section>
  )
}
