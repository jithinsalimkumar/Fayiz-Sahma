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
      className="relative min-h-screen pt-28 pb-16 px-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF6EE] overflow-hidden"
    >
      {/* Background Rotating Star Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25 rotate-slow">
        <Islamic8PointStar className="w-[700px] h-[700px] text-[#D4AF37]" />
      </div>

      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Bismillah Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="font-arabic text-3xl sm:text-5xl text-[#D4AF37] arabic-gold tracking-wider mb-2 font-bold leading-relaxed">
            {bismillah.arabic}
          </p>
          <p className="text-xs tracking-[0.25em] uppercase font-medium text-[#FCD34D]">
            {bismillah.translation}
          </p>
        </motion.div>

        <IslamicArchDivider className="my-4" />

        {/* Save The Date Subheading */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Wedding Reception</span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.span>

        {/* Large Elegant Names with Animated Gold Shimmer Sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 my-2"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider gold-shimmer-text py-2">
            {groom.shortName}
          </h1>
          <span className="font-script text-5xl sm:text-6xl text-[#D4AF37] font-normal my-1 md:my-0">
            &amp;
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider gold-shimmer-text py-2">
            {bride.shortName}
          </h1>
        </motion.div>

        {/* Event Key Details Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl w-full my-8 py-5 px-6 rounded-2xl bg-[#064E3B]/90 backdrop-blur-md border border-[#D4AF37]/60 shadow-xl"
        >
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-xs uppercase tracking-wider text-[#FCD34D] font-medium">Date</span>
            <span className="font-serif text-base font-bold text-[#FAF6EE]">{wedding.displayDate}</span>
          </div>

          <div className="flex flex-col items-center sm:border-x sm:border-[#D4AF37]/30 sm:px-4">
            <Clock className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-xs uppercase tracking-wider text-[#FCD34D] font-medium">Time</span>
            <span className="font-serif text-base font-bold text-[#FAF6EE]">{wedding.displayTime}</span>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-xs uppercase tracking-wider text-[#FCD34D] font-medium">Venue</span>
            <span className="font-serif text-base font-bold text-[#FAF6EE]">{venue.name}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
