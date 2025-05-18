"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ro, enUS, ar } from "date-fns/locale"
import { CalendarIcon, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const WEEKDAY_HOURS = Array.from({ length: 5 }, (_, i) => i + 18).map(hour => 
  `${hour.toString().padStart(2, '0')}:00`
)
const WEEKEND_HOURS = Array.from({ length: 8 }, (_, i) => i + 10).map(hour => 
  `${hour.toString().padStart(2, '0')}:00`
)

export function ContactForm() {
  const { t, language } = useLanguage()
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()

  const getLocale = () => {
    switch (language) {
      case "ro": return ro
      case "ar": return ar
      default: return enUS
    }
  }

  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day === 0 || day === 6
  }

  const getAvailableHours = (date: Date) => {
    return isWeekend(date) ? WEEKEND_HOURS : WEEKDAY_HOURS
  }

  const disabledDays = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">{t("contact.title")}</h2>
        <p className="text-center text-gray-600">{t("contact.subtitle")}</p>
        <p className="text-center text-sm text-primary">{t("contact.availability")}</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t("contact.name")}</label>
          <input
            type="text"
            placeholder={t("contact.namePlaceholder")}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t("contact.phone")}</label>
          <input
            type="tel"
            placeholder={t("contact.phonePlaceholder")}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t("contact.service")}</label>
          <select className="w-full px-3 py-2 border rounded-md">
            <option value="">{t("contact.selectService")}</option>
            <option value="tv">{t("services.tv.title")}</option>
            <option value="ac">{t("services.ac.title")}</option>
            <option value="installation">{t("services.installation.title")}</option>
            <option value="cleaning">{t("services.cleaning.title")}</option>
            <option value="refrigerant">{t("services.refrigerant.title")}</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t("contact.date")}</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP", { locale: getLocale() }) : t("contact.selectDate")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={disabledDays}
                locale={getLocale()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {date && (
          <div className="space-y-2">
            <label className="text-sm font-medium">{t("contact.time")}</label>
            <Select onValueChange={setTime} value={time}>
              <SelectTrigger>
                <SelectValue placeholder={t("contact.selectTime")} />
              </SelectTrigger>
              <SelectContent>
                {getAvailableHours(date).map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour} {isWeekend(date) ? "(Weekend)" : "(Weekday)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium">{t("contact.message")}</label>
          <textarea
            placeholder={t("contact.messagePlaceholder")}
            className="w-full px-3 py-2 border rounded-md h-32"
          />
        </div>

        <Button className="w-full" type="submit">
          {t("contact.sendWhatsApp")}
        </Button>
      </form>
    </div>
  )
} 