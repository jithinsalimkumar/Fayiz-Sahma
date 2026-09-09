import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { Islamic8PointStar, IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

export default function LandingSplash({ onEnter }) {
  const { bismillah, groom, bride, wedding } = weddingData;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-12 bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-center overflow-hidden z-10">
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

      {/* Central Card with Royal Gold Monogram Emblem & Internal Dynamic Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="my-auto py-10 px-8 sm:px-16 rounded-3xl bg-[#064E3B]/95 border-2 border-[#D4AF37] shadow-[0_15px_50px_rgba(0,0,0,0.6)] max-w-lg w-full z-10 flex flex-col items-center relative overflow-hidden"
      >
        {/* Dynamic Rotating Geometric Pattern (Enlarged Size with Subtle Opacity for Crystal Clear Text Legibility) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform">
          <Islamic8PointStar className="w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] text-[#D4AF37]" />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_75%)]" />

        {/* Corner Islamic Geometric Accents */}
        <CardCornerFiligree />

        {/* Monogram Crest - Custom Royal Gold Monogram Standalone Calligraphy */}
        <div className="my-2 z-10 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center">
          <FSMonogramCalligraphy className="h-28 sm:h-36 w-auto" />
        </div>

        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 my-3 z-10 shadow-xs">
          The Wedding Reception
        </span>

        {/* Couple First Names with Gold Shimmer Typography */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF6EE] font-bold tracking-wider my-2 leading-tight z-10 gold-shimmer-text">
          {groom.shortName} <span className="font-script text-[#D4AF37] font-normal text-4xl sm:text-5xl mx-1.5">&amp;</span> {bride.shortName}
        </h1>

        <IslamicArchDivider className="my-3 z-10" />

        {/* Wedding Date */}
        <p className="font-serif text-sm sm:text-base text-[#FCD34D] tracking-wider font-semibold z-10">
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
          <span>Open Invitation</span>
          <div className="p-3 rounded-full bg-[#D4AF37] text-[#064E3B] border border-[#FFF4D0] shadow-lg animate-bounce group-hover:scale-110 transition-transform">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
