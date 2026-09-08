import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";

export default function Footer() {
  const { groom, bride, hashtag } = weddingData;

  return (
    <footer className="w-full py-16 px-6 bg-[#022C22] text-[#FAF6EE] border-t border-[#D4AF37]/30 text-center relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Top Arabic Calligraphy - Jazakumullahu Khairan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="font-arabic text-3xl sm:text-4xl text-[#D4AF37] arabic-gold tracking-wider font-bold leading-relaxed">
            جَزَاكُمُ ٱللَّٰهُ خَيْرً۠ا
          </p>
        </motion.div>

        {/* 2. English Supplication & Gratitude Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-sm sm:text-base text-[#FAF6EE]/90 max-w-lg mx-auto leading-relaxed font-normal mb-8 tracking-wide"
        >
          May Allah reward you with goodness for joining us on our special day.
        </motion.p>

        {/* 3. Flowing Cursive Calligraphy Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mb-10 w-full overflow-x-auto no-scrollbar py-2"
        >
          <h3 className="font-allura text-lg min-[360px]:text-xl min-[480px]:text-2xl sm:text-3xl md:text-4xl text-[#FAF6EE] font-normal leading-tight drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] whitespace-nowrap tracking-wide px-2">
            {groom.name} <span className="text-[#D4AF37] font-normal mx-1">&amp;</span> {bride.name}
          </h3>
        </motion.div>

        {/* 4. Fine Horizontal Gold Accent Divider */}
        <div className="w-full max-w-3xl border-t border-[#D4AF37]/30 my-8 opacity-70" />

        {/* 5. Bottom Hashtag, Made With Love & Copyright Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col items-center gap-2 text-xs text-[#D4AF37]/80 font-sans tracking-[0.15em] font-medium"
        >
          <p className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>{hashtag || "#FayizWedsSahma"}</span>
            <span className="text-[#D4AF37]/40">•</span>
            <span>Made with <span className="text-red-500 inline-block animate-pulse">❤️</span> and Dua</span>
          </p>
          <p className="text-[11px] text-[#D4AF37]/60 tracking-[0.2em] uppercase mt-1">
            © 2026 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
