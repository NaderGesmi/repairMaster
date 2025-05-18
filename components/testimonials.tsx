"use client"

import { useLanguage } from "@/components/language-provider"

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Alexandru P.",
      text: t("testimonials.alex"),
    },
    {
      name: "Gabriela S.",
      text: t("testimonials.gabriela"),
    },
    {
      name: "Mihai D.",
      text: t("testimonials.mihai"),
    },
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <header className="testimonials__header">
          <h2 className="testimonials__title">{t("testimonials.title")}</h2>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonials__card">
              <blockquote className="testimonials__quote">
                <p className="testimonials__text">{testimonial.text}</p>
                <footer className="testimonials__footer">
                  <cite className="testimonials__author">{testimonial.name}</cite>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 