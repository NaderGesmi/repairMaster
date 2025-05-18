"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "ro" | "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ro: {
    // Navigation
    "navbar.services": "Servicii",
    "navbar.pricing": "Prețuri",
    "navbar.testimonials": "Recenzii",
    "navbar.contact": "Contact",

    // Hero Section
    "hero.title": "Servicii Profesionale de Reparații",
    "hero.subtitle": "Reparații rapide și de încredere pentru aparatele tale de uz casnic și birou",
    "hero.cta": "Programează o Consultație",
    "hero.imageAlt": "Servicii de reparații profesionale",

    // Services Section
    "services.title": "Serviciile Noastre",
    "services.subtitle": "Servicii profesionale de reparații pentru toate aparatele tale de uz casnic",
    "services.tv": "Reparații TV",
    "services.ac": "Reparații Aparate de Aer Condiționat",
    "services.acInstall": "Instalare Aparate de Aer Condiționat",
    "services.acCleaning": "Curățare Aparate de Aer Condiționat",
    "services.freon": "Încărcare Freon",
    "services.diagnostics": "Diagnosticare",
    "services.tvDesc": "Reparații profesionale pentru toate tipurile de televizoare, inclusiv LED, LCD, și Smart TV",
    "services.acDesc": "Reparații complete pentru aparate de aer condiționat, diagnosticare și rezolvare rapidă a problemelor",
    "services.acInstallDesc": "Instalare profesională a aparatelor de aer condiționat, cu garanție și asistență post-instalare",
    "services.acCleaningDesc": "Curățare profesională și mentenanță preventivă pentru aparatele de aer condiționat",
    "services.freonDesc": "Încărcare freon și verificare sistem de răcire pentru eficiență maximă",
    "services.diagnosticsDesc": "Diagnosticare profesională și evaluare tehnică pentru toate tipurile de aparate",
    "services.contact": "Contactează-ne pe WhatsApp",

    // Testimonials Section
    "testimonials.title": "Ce Spun Clienții Noștri",
    "testimonials.alex": "Serviciu excelent! Au reparat televizorul meu într-o singură zi. Foarte profesioniști și prompti.",
    "testimonials.gabriela": "Am fost foarte mulțumită de serviciile de curățare a aparatului de aer condiționat. Recomand cu încredere!",
    "testimonials.mihai": "Prețuri corecte și servicii de calitate. Au rezolvat problema cu aparatul de aer condiționat rapid și eficient.",

    // Pricing Section
    "pricing.title": "Prețuri Transparente",
    "pricing.subtitle": "Oferim cele mai bune prețuri pentru serviciile noastre de reparații",
    "pricing.tvTab": "Reparații TV",
    "pricing.acTab": "Reparații AC",
    "pricing.size": "Dimensiune",
    "pricing.standardPrice": "Preț Standard",
    "pricing.promoPrice": "Preț Promoțional",
    "pricing.savings": "Economisești",
    "pricing.bookNow": "Programează Acum",

    // Contact Section
    "contact.title": "Programează o Consultație",
    "contact.name": "Nume",
    "contact.namePlaceholder": "Introdu numele tău",
    "contact.email": "Email",
    "contact.emailPlaceholder": "Introdu adresa de email",
    "contact.phone": "Telefon",
    "contact.phonePlaceholder": "Introdu numărul de telefon",
    "contact.date": "Data",
    "contact.selectDate": "Selectează data",
    "contact.time": "Ora",
    "contact.selectTime": "Selectează ora",
    "contact.message": "Mesaj",
    "contact.messagePlaceholder": "Descrie problema sau întrebarea ta",
    "contact.submit": "Trimite",

    // Social Proof Section
    "socialProof.title": "Urmărește-ne pe Social Media",
    "socialProof.needFast": "Ai nevoie de ajutor rapid?",
    "socialProof.callUs": "Sunați-ne acum pentru o consultație gratuită",

    // Footer
    "footer.description": "Servicii profesionale de reparații pentru aparate de uz casnic și birou în București și împrejurimi.",
    "footer.quickLinks": "Link-uri Rapide",
    "footer.contact": "Contact",
    "footer.location": "București, România",
    "footer.workingHours": "Luni - Vineri: 8:00 - 20:00\nSâmbătă: 9:00 - 18:00",
    "footer.rights": "Toate drepturile rezervate.",
  },
  en: {
    // Navigation
    "navbar.services": "Services",
    "navbar.pricing": "Pricing",
    "navbar.testimonials": "Testimonials",
    "navbar.contact": "Contact",

    // Hero Section
    "hero.title": "Professional Repair Services",
    "hero.subtitle": "Fast and reliable repairs for your home and office appliances",
    "hero.cta": "Schedule a Consultation",
    "hero.imageAlt": "Professional repair services",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Professional repair services for all your home appliances",
    "services.tv": "TV Repair",
    "services.ac": "Air Conditioner Repair",
    "services.acInstall": "Air Conditioner Installation",
    "services.acCleaning": "Air Conditioner Cleaning",
    "services.freon": "Freon Recharge",
    "services.diagnostics": "Diagnostics",
    "services.tvDesc": "Professional repairs for all types of TVs, including LED, LCD, and Smart TVs",
    "services.acDesc": "Complete air conditioner repairs, diagnostics, and quick problem resolution",
    "services.acInstallDesc": "Professional air conditioner installation with warranty and post-installation support",
    "services.acCleaningDesc": "Professional cleaning and preventive maintenance for air conditioners",
    "services.freonDesc": "Freon recharge and cooling system check for maximum efficiency",
    "services.diagnosticsDesc": "Professional diagnostics and technical assessment for all types of appliances",
    "services.contact": "Contact us on WhatsApp",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.alex": "Excellent service! They repaired my TV in just one day. Very professional and prompt.",
    "testimonials.gabriela": "I was very satisfied with the air conditioner cleaning service. Highly recommend!",
    "testimonials.mihai": "Fair prices and quality service. They solved the air conditioner issue quickly and efficiently.",

    // Pricing Section
    "pricing.title": "Transparent Pricing",
    "pricing.subtitle": "We offer the best prices for our repair services",
    "pricing.tvTab": "TV Repair",
    "pricing.acTab": "AC Repair",
    "pricing.size": "Size",
    "pricing.standardPrice": "Standard Price",
    "pricing.promoPrice": "Promotional Price",
    "pricing.savings": "You Save",
    "pricing.bookNow": "Book Now",

    // Contact Section
    "contact.title": "Schedule a Consultation",
    "contact.name": "Name",
    "contact.namePlaceholder": "Enter your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "Enter your email",
    "contact.phone": "Phone",
    "contact.phonePlaceholder": "Enter your phone number",
    "contact.date": "Date",
    "contact.selectDate": "Select date",
    "contact.time": "Time",
    "contact.selectTime": "Select time",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Describe your issue or question",
    "contact.submit": "Submit",

    // Social Proof Section
    "socialProof.title": "Follow Us on Social Media",
    "socialProof.needFast": "Need Help Fast?",
    "socialProof.callUs": "Call us now for a free consultation",

    // Footer
    "footer.description": "Professional repair services for home and office appliances in Bucharest and surrounding areas.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.location": "Bucharest, Romania",
    "footer.workingHours": "Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 6:00 PM",
    "footer.rights": "All rights reserved.",
  },
  ar: {
    // Navigation
    "navbar.services": "الخدمات",
    "navbar.pricing": "الأسعار",
    "navbar.testimonials": "الشهادات",
    "navbar.contact": "اتصل بنا",

    // Hero Section
    "hero.title": "خدمات إصلاح احترافية",
    "hero.subtitle": "إصلاحات سريعة وموثوقة لأجهزتك المنزلية والمكتبية",
    "hero.cta": "جدولة استشارة",
    "hero.imageAlt": "خدمات إصلاح احترافية",

    // Services Section
    "services.title": "خدماتنا",
    "services.subtitle": "خدمات إصلاح احترافية لجميع أجهزتك المنزلية",
    "services.tv": "إصلاح التلفاز",
    "services.ac": "إصلاح مكيف الهواء",
    "services.acInstall": "تركيب مكيف الهواء",
    "services.acCleaning": "تنظيف مكيف الهواء",
    "services.freon": "إعادة شحن الفريون",
    "services.diagnostics": "التشخيص",
    "services.tvDesc": "إصلاحات احترافية لجميع أنواع التلفاز، بما في ذلك LED و LCD و Smart TV",
    "services.acDesc": "إصلاحات كاملة لمكيفات الهواء، تشخيص، وحل سريع للمشاكل",
    "services.acInstallDesc": "تركيب احترافي لمكيفات الهواء مع ضمان ودعم ما بعد التركيب",
    "services.acCleaningDesc": "تنظيف احترافي وصيانة وقائية لمكيفات الهواء",
    "services.freonDesc": "إعادة شحن الفريون وفحص نظام التبريد لأقصى كفاءة",
    "services.diagnosticsDesc": "تشخيص احترافي وتقييم فني لجميع أنواع الأجهزة",
    "services.contact": "تواصل معنا على WhatsApp",

    // Testimonials Section
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.alex": "خدمة ممتازة! قاموا بإصلاح التلفاز في يوم واحد فقط. محترفون وسريعون جداً.",
    "testimonials.gabriela": "كنت راضية جداً عن خدمة تنظيف مكيف الهواء. أنصح بها بشدة!",
    "testimonials.mihai": "أسعار عادلة وخدمة عالية الجودة. قاموا بحل مشكلة مكيف الهواء بسرعة وكفاءة.",

    // Pricing Section
    "pricing.title": "أسعار شفافة",
    "pricing.subtitle": "نقدم أفضل الأسعار لخدمات الإصلاح لدينا",
    "pricing.tvTab": "إصلاح التلفاز",
    "pricing.acTab": "إصلاح مكيف الهواء",
    "pricing.size": "الحجم",
    "pricing.standardPrice": "السعر القياسي",
    "pricing.promoPrice": "السعر الترويجي",
    "pricing.savings": "توفير",
    "pricing.bookNow": "احجز الآن",

    // Contact Section
    "contact.title": "جدولة استشارة",
    "contact.name": "الاسم",
    "contact.namePlaceholder": "أدخل اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.phonePlaceholder": "أدخل رقم هاتفك",
    "contact.date": "التاريخ",
    "contact.selectDate": "اختر التاريخ",
    "contact.time": "الوقت",
    "contact.selectTime": "اختر الوقت",
    "contact.message": "الرسالة",
    "contact.messagePlaceholder": "صف مشكلتك أو سؤالك",
    "contact.submit": "إرسال",

    // Social Proof Section
    "socialProof.title": "تابعنا على وسائل التواصل الاجتماعي",
    "socialProof.needFast": "تحتاج مساعدة سريعة؟",
    "socialProof.callUs": "اتصل بنا الآن للحصول على استشارة مجانية",

    // Footer
    "footer.description": "خدمات إصلاح احترافية للأجهزة المنزلية والمكتبية في بوخارست والمناطق المحيطة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.location": "بوخارست، رومانيا",
    "footer.workingHours": "الاثنين - الجمعة: 8:00 صباحاً - 8:00 مساءً\nالسبت: 9:00 صباحاً - 6:00 مساءً",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with undefined to prevent hydration mismatch
  const [language, setLanguage] = useState<Language | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get the saved language or default to 'ro'
    const savedLanguage = localStorage.getItem("language") as Language
    setLanguage(savedLanguage || "ro")
    setMounted(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    if (!language) return key
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language: language!, setLanguage: handleSetLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
