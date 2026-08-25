import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { Islamic8PointStar, IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";

export default function BlessingVerse() {
  const { quranicVerse } = weddingData;

  return (
    <section
      id="verse"
      className="py-24 px-6 bg-[#022C22] text-[#FAF6EE] relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Animated geometric star pattern backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25 rotate-slow">
        <Islamic8PointStar className="w-[500px] h-[500px] text-[#D4AF37]" />
      </div>

      <div className="max-w-3xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-8 sm:p-14 rounded-3xl bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/60 shadow-[0_15px_45px_rgba(0,0,0,0.5)] relative"
        >
          {/* Corner Flourish Markers */}
          <CardCornerFiligree />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-6 block">
            Quranic Blessing
          </span>

          {/* Arabic Verse */}
          <p className="font-arabic text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] arabic-gold leading-loose mb-6 font-bold px-2">
            {quranicVerse.arabic}
          </p>

          <IslamicArchDivider className="my-6" />

          {/* English Translation */}
          <p className="font-serif text-lg sm:text-xl text-[#FCD34D] italic leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            "{quranicVerse.translation}"
          </p>

          {/* Citation Reference */}
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-[#022C22] bg-gradient-to-r from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] px-5 py-1.5 rounded-full shadow-sm">
            {quranicVerse.reference}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
