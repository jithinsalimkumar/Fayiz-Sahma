import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { Islamic8PointStar, IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";

export default function LandingSplash({ onEnter }) {
  const { bismillah, coupleInitials, groom, bride, wedding } = weddingData;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-12 bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE0] to-[#FAF6EE] dark:from-[#022C22] dark:via-[#064E3B] dark:to-[#022C22] text-center overflow-hidden z-10 transition-colors duration-300">
      {/* Slow rotating geometric background pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 dark:opacity-30 rotate-slow">
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
        <p className="text-xs tracking-[0.25em] uppercase font-medium text-[#0A5C36]/80 dark:text-[#FCD34D]/90 font-sans max-w-md mx-auto">
          {bismillah.translation}
        </p>
      </motion.div>

      {/* Central Card with Monogram Emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="my-auto py-10 px-8 sm:px-16 rounded-3xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/60 shadow-[0_15px_40px_rgba(212,175,55,0.15)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.5)] max-w-lg w-full z-10 flex flex-col items-center relative"
      >
        {/* Corner Islamic Geometric Accents */}
        <CardCornerFiligree />

        {/* Monogram Emblem */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#064E3B] to-[#0A5C36] dark:from-[#022C22] dark:to-[#064E3B] border-2 border-[#D4AF37] mb-6 shadow-md gold-pulse-glow">
          <span className="font-serif text-3xl font-bold gold-shimmer-text">
            {coupleInitials}
          </span>
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-2">
          The Wedding Ceremony
        </span>

        {/* Couple First Names with Elegant Calligraphy & Display Typography */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#064E3B] dark:text-[#FAF6EE] font-bold tracking-wider mb-2 leading-tight">
          {groom.shortName} <span className="font-script text-[#D4AF37] font-normal text-4xl sm:text-5xl mx-1.5">&amp;</span> {bride.shortName}
        </h1>

        <IslamicArchDivider className="my-4" />

        {/* Wedding Date */}
        <p className="font-sans text-sm sm:text-base text-[#0A5C36] dark:text-[#FCD34D] tracking-wider font-semibold">
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
          className="group flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#064E3B] dark:text-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer focus:outline-none"
        >
          <span>Enter Invitation</span>
          <div className="p-3 rounded-full bg-[#064E3B] dark:bg-[#D4AF37] text-[#D4AF37] dark:text-[#064E3B] border border-[#D4AF37] shadow-lg animate-bounce group-hover:scale-110 transition-transform">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
