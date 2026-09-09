import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { Islamic8PointStar, IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";

export default function BlessingVerse() {
  const { quranicVerse } = weddingData;

  return (
    <section
      id="verse"
      className="py-14 sm:py-20 max-h-[550px]:py-10 px-4 sm:px-6 bg-[#160420] text-[#FAF2ED] relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Animated geometric star pattern backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25 rotate-slow transform-gpu will-change-transform">
        <Islamic8PointStar className="w-[500px] h-[500px] max-h-[550px]:w-[380px] max-h-[550px]:h-[380px] text-[#E8D4C5]" />
      </div>

      <div className="max-w-3xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 sm:p-12 max-h-[550px]:p-5 rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/60 shadow-[0_15px_45px_rgba(0,0,0,0.6)] relative"
        >
          {/* Corner Flourish Markers */}
          <CardCornerFiligree />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8D4C5] mb-3 block">
            Quranic Blessing
          </span>

          {/* Arabic Verse */}
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#E8D4C5] arabic-gold leading-loose mb-4 font-normal px-2">
            {quranicVerse.arabic}
          </p>

          <IslamicArchDivider className="my-4" />

          {/* English Translation */}
          <p className="font-serif text-base sm:text-xl text-[#F5E6DC] italic leading-relaxed max-w-2xl mx-auto mb-4 font-normal">
            "{quranicVerse.translation}"
          </p>

          {/* Citation Reference */}
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-[#160420] bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] px-5 py-1.5 rounded-full shadow-sm">
            {quranicVerse.reference}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
