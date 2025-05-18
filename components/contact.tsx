"use client"

import { useLanguage } from "./language-provider"
import { FadeIn } from "./animations"
import { motion } from "framer-motion"
import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `*Nouă Solicitare de Contact*%0A%0A` +
      `*Nume:* ${formData.name}%0A` +
      `*Telefon:* ${formData.phone}%0A` +
      `*Serviciu:* ${formData.service}%0A` +
      `*Mesaj:* ${formData.message}`

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/40741318528?text=${whatsappMessage}`, '_blank')
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <FadeIn>
          <div className="contact__header">
            <h2 className="contact__title">{t("contact.title")}</h2>
            <p className="contact__subtitle">{t("contact.subtitle")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__field">
              <label htmlFor="name" className="contact__label">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder={t("contact.namePlaceholder")}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="phone" className="contact__label">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder={t("contact.phonePlaceholder")}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="service" className="contact__label">
                {t("contact.service")}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="contact__input"
              >
                <option value="">{t("contact.selectService")}</option>
                <option value="Reparații TV">Reparații TV</option>
                <option value="Reparații AC">Reparații AC</option>
                <option value="Instalare AC">Instalare AC</option>
                <option value="Curățare AC">Curățare AC</option>
                <option value="Încărcare Freon">Încărcare Freon</option>
                <option value="Diagnosticare">Diagnosticare</option>
              </select>
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="contact__textarea"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>

            <motion.button
              type="submit"
              className="contact__submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t("contact.sendWhatsApp")}
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
} 