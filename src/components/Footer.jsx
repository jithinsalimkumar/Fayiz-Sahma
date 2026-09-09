import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";

export default function Footer() {
  const { groom, bride, hashtag } = weddingData;

  return (
    <footer className="w-full py-10 sm:py-12 px-4 sm:px-6 bg-[#160420] text-[#FAF2ED] border-t border-[#E8D4C5]/30 text-center relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Top Arabic Calligraphy - Jazakumullahu Khairan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3"
        >
          <p className="font-arabic text-2xl sm:text-3xl text-[#E8D4C5] arabic-gold tracking-wider font-normal leading-relaxed">
            جَزَاكُمُ ٱللَّٰهُ خَيْرً۠ا
          </p>
        </motion.div>

        {/* 2. English Supplication & Gratitude Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-xs sm:text-sm text-[#FAF2ED]/90 max-w-lg mx-auto leading-relaxed font-normal mb-5 tracking-wide"
        >
          May Allah reward you with goodness for joining us on our special day.
        </motion.p>


        {/* 4. Fine Horizontal Gold Accent Divider */}
        <div className="w-full max-w-2xl border-t border-[#E8D4C5]/30 my-5 opacity-70" />

        {/* 5. Bottom 3-Line Footer Section: Hashtag, Made with Dua & Copyright Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col items-center gap-1.5 font-sans"
        >
          {/* Line 1: Hashtag */}
          <p className="text-xs text-[#E8D4C5] font-bold tracking-[0.25em]">
            {hashtag || "#FayizWedsSahma"}
          </p>

          {/* Line 2: Made with Love & Dua */}
          <p className="text-xs text-[#E8D4C5]/90 font-medium tracking-[0.15em] flex items-center justify-center gap-1.5">
            <span>Made with</span>
            <span className="text-rose-400 inline-block animate-pulse">❤️</span>
            <span>and Dua</span>
          </p>

          {/* Line 3: Copyright */}
          <p className="text-[11px] text-[#E8D4C5]/60 tracking-[0.2em] uppercase mt-0.5">
            © 2026 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
