"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { t, dir } = useLanguage()
  const [date, setDate] = useState<Date>()

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ]

  return (
    <section id="contact" className="py-16 bg-background" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("contact.title")}</h2>
        </div>
        <div className="mx-auto max-w-lg mt-8">
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" placeholder={t("contact.namePlaceholder")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" type="email" placeholder={t("contact.emailPlaceholder")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">{t("contact.phone")}</Label>
              <Input id="phone" type="tel" placeholder={t("contact.phonePlaceholder")} />
            </div>
            <div className="grid gap-2">
              <Label>{t("contact.date")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : t("contact.selectDate")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">{t("contact.time")}</Label>
              <Select>
                <SelectTrigger id="time">
                  <SelectValue placeholder={t("contact.selectTime")} />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea id="message" placeholder={t("contact.messagePlaceholder")} />
            </div>
            <Button type="submit" className="w-full">
              {t("contact.submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
