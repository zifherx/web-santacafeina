"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { encodeMessageURI } from "@/lib/functions.global";

export function BtnWhatsApp() {
  const handleWhatsAppClick = () => {
    const numeroTelefono = "51959260357";
    const mensaje =
      "Hola, me gustaría solicitar información sobre los productos de Santa Cafeína.";
    window.open(encodeMessageURI(numeroTelefono, mensaje), "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
        aria-label="Chat con WhatsApp"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp SantaCafeina"
          fill
          className="rounded-full object-cover"
          priority
        />
      </motion.button>

      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.div>
  );
}
