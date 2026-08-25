import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { Islamic8PointStar, IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";

export default function LandingSplash({ onEnter }) {
  const { bismillah, groom, bride, wedding } = weddingData;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-12 bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-center overflow-hidden z-10">
      {/* Slow rotating geometric background pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 rotate-slow">
        <Islamic8PointStar className="w-[650px] h-[650px] text-[#D4AF37]" />
      </div>

      {/* Top Bismillah Calligraphy */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-6 z-10"
      >
        <p className="font-arabic text-3xl sm:text-4xl text-[#D4AF37] arabic-gold tracking-wider mb-2 font-bold leading-relaxed">
          {bismillah.arabic}
        </p>
        <p className="text-xs tracking-[0.25em] uppercase font-medium text-[#FCD34D] font-sans max-w-md mx-auto">
          {bismillah.translation}
        </p>
      </motion.div>

      {/* Central Card with Royal Gold Monogram Emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="my-auto py-10 px-8 sm:px-16 rounded-3xl bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37] shadow-[0_15px_50px_rgba(0,0,0,0.5)] max-w-lg w-full z-10 flex flex-col items-center relative"
      >
        {/* Corner Islamic Geometric Accents */}
        <CardCornerFiligree />

        {/* Monogram Crest - Perfectly Harmonized Royal Gold Medallion */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full bg-gradient-to-br from-[#064E3B] via-[#022C22] to-[#064E3B] border-2 border-[#D4AF37] shadow-[0_12px_35px_rgba(212,175,55,0.45)] gold-pulse-glow p-1">
          <div className="w-full h-full rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#022C22]/90 relative overflow-hidden">
            <Islamic8PointStar className="absolute inset-0 w-full h-full text-[#D4AF37] opacity-20 p-2 pointer-events-none" />
            <span className="font-serif text-3xl sm:text-4xl font-bold tracking-widest leading-none flex items-center justify-center gap-0.5 z-10">
              <span className="gold-shimmer-text">{groom.shortName[0]}</span>
              <span className="font-script text-2xl sm:text-3xl text-[#D4AF37] font-normal mx-0.5">&amp;</span>
              <span className="gold-shimmer-text">{bride.shortName[0]}</span>
            </span>
          </div>
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
          The Wedding Reception
        </span>

        {/* Couple First Names with Original Display Typography */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#FAF6EE] font-bold tracking-wider mb-2 leading-tight">
          {groom.shortName} <span className="font-script text-[#D4AF37] font-normal text-4xl sm:text-5xl mx-1.5">&amp;</span> {bride.shortName}
        </h1>

        <IslamicArchDivider className="my-4" />

        {/* Wedding Date */}
        <p className="font-sans text-sm sm:text-base text-[#FCD34D] tracking-wider font-semibold">
          {wedding.displayDate}
        </p>
      </motion.div>

      {/* Bottom Enter Cue Button with soft pulse animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pb-6 z-10"
      >
        <button
          onClick={onEnter}
          className="group flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37] hover:text-[#FFF4D0] transition-colors cursor-pointer focus:outline-none"
        >
          <span>Enter Invitation</span>
          <div className="p-3 rounded-full bg-[#D4AF37] text-[#064E3B] border border-[#FFF4D0] shadow-lg animate-bounce group-hover:scale-110 transition-transform">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
