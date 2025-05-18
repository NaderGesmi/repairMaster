"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import { BounceButton } from "./animations"

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="floating-cta">
        <BounceButton
          className="floating-cta__button floating-cta__button--primary"
          onClick={() => window.location.href = "tel:+40741318528"}
        >
          <Phone className="h-5 w-5" />
          <span>Sunați</span>
        </BounceButton>

        <BounceButton
          className="floating-cta__button"
          onClick={() => window.location.href = "https://wa.me/40741318528"}
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </BounceButton>

        <BounceButton
          className="floating-cta__button"
          onClick={() => window.location.href = "#contact"}
        >
          <Calendar className="h-5 w-5" />
          <span>Programează</span>
        </BounceButton>
      </div>
    </motion.div>
  )
} 