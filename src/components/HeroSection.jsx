import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, Islamic8PointStar } from "./IslamicPatternBg";

export default function HeroSection() {
  const { bismillah, groom, bride, wedding, venue } = weddingData;

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-screen max-h-[520px]:min-h-screen pt-12 sm:pt-16 max-h-[520px]:pt-8 pb-8 sm:pb-10 max-h-[520px]:pb-3 px-4 sm:px-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-[#FAF2ED] overflow-hidden"
    >
      {/* Background Rotating Star Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25 rotate-slow transform-gpu will-change-transform">
        <Islamic8PointStar className="w-[700px] h-[700px] max-h-[520px]:w-[450px] max-h-[520px]:h-[450px] text-[#E8D4C5]" />
      </div>

      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Bismillah Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-2 sm:mb-3 max-h-[520px]:mb-1"
        >
          <p className="font-arabic text-2xl sm:text-4xl max-h-[520px]:text-xl text-[#E8D4C5] arabic-gold tracking-wider mb-3 sm:mb-3.5 max-h-[520px]:mb-2 font-normal leading-relaxed">
            {bismillah.arabic}
          </p>
          <p className="text-xs max-h-[520px]:text-[10px] tracking-[0.25em] uppercase font-medium text-[#F5E6DC]">
            {bismillah.translation}
          </p>
        </motion.div>

        <IslamicArchDivider className="my-1.5 sm:my-2 max-h-[520px]:my-1" />

        {/* Save The Date Subheading */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs max-h-[520px]:text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8D4C5] bg-[#E8D4C5]/10 px-4 py-1 max-h-[520px]:py-0.5 rounded-full border border-[#E8D4C5]/40 mb-2 sm:mb-3 max-h-[520px]:mb-1"
        >
          <Sparkles className="w-3.5 h-3.5 max-h-[520px]:w-3 max-h-[520px]:h-3 text-[#E8D4C5]" />
          <span>The Wedding Reception</span>
          <Sparkles className="w-3.5 h-3.5 max-h-[520px]:w-3 max-h-[520px]:h-3 text-[#E8D4C5]" />
        </motion.span>

        {/* Large Elegant Names with Animated Gold Shimmer Sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row max-h-[520px]:flex-row items-center justify-center gap-2 md:gap-6 max-h-[520px]:gap-3 my-0.5 max-h-[520px]:my-0"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-h-[520px]:text-2xl font-bold tracking-wider gold-shimmer-text py-0.5 max-h-[520px]:py-0">
            {groom.shortName}
          </h1>
          <span className="font-script text-5xl sm:text-6xl max-h-[520px]:text-3xl text-[#E8D4C5] font-normal my-0.5 md:my-0">
            &amp;
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-h-[520px]:text-2xl font-bold tracking-wider gold-shimmer-text py-0.5 max-h-[520px]:py-0">
            {bride.shortName}
          </h1>
        </motion.div>

        {/* Event Key Details Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 max-h-[520px]:grid-cols-3 gap-4 sm:gap-8 max-h-[520px]:gap-2 max-w-2xl w-full my-3 sm:my-4 max-h-[520px]:my-1.5 py-3 sm:py-4 max-h-[520px]:py-1.5 px-5 max-h-[520px]:px-3 rounded-2xl bg-[#250A36]/95 border border-[#E8D4C5]/60 shadow-xl"
        >
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 max-h-[520px]:w-3.5 max-h-[520px]:h-3.5 text-[#E8D4C5] mb-1 max-h-[520px]:mb-0.5" />
            <span className="text-[11px] max-h-[520px]:text-[9px] uppercase tracking-wider text-[#F5E6DC] font-medium">Date</span>
            <span className="font-serif text-sm sm:text-base max-h-[520px]:text-xs font-bold text-[#FAF2ED]">{wedding.displayDate}</span>
          </div>

          <div className="flex flex-col items-center sm:border-x sm:border-[#E8D4C5]/30 max-h-[520px]:border-x max-h-[520px]:border-[#E8D4C5]/30 sm:px-4 max-h-[520px]:px-2">
            <Clock className="w-5 h-5 max-h-[520px]:w-3.5 max-h-[520px]:h-3.5 text-[#E8D4C5] mb-1 max-h-[520px]:mb-0.5" />
            <span className="text-[11px] max-h-[520px]:text-[9px] uppercase tracking-wider text-[#F5E6DC] font-medium">Time</span>
            <span className="font-serif text-sm sm:text-base max-h-[520px]:text-xs font-bold text-[#FAF2ED]">{wedding.displayTime}</span>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 max-h-[520px]:w-3.5 max-h-[520px]:h-3.5 text-[#E8D4C5] mb-1 max-h-[520px]:mb-0.5" />
            <span className="text-[11px] max-h-[520px]:text-[9px] uppercase tracking-wider text-[#F5E6DC] font-medium">Venue</span>
            <span className="font-serif text-sm sm:text-base max-h-[520px]:text-xs font-bold text-[#FAF2ED]">{venue.name}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
