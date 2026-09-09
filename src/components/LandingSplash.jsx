import React, { useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { Islamic8PointStar, IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

export default function LandingSplash({ onEnter }) {
  const { bismillah, groom, bride, wedding } = weddingData;
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Unmount splash overlay after 600ms smooth fadeout animation completes
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <motion.section
      animate={{ opacity: isOpening ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 w-full h-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-center overflow-y-auto overscroll-contain touch-pan-y z-50 select-none"
    >
      {/* Single Unified Grouped Block - Placed exactly in the vertical & horizontal center with 100% symmetrical top & bottom space */}
      <div className="w-full max-w-md sm:max-w-lg flex flex-col items-center justify-center my-auto py-2">
        
        {/* Top Bismillah Calligraphy */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -30 : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 sm:mb-5 max-h-[550px]:mb-2 z-10 flex-shrink-0"
        >
          <p className="font-arabic text-2xl sm:text-4xl max-h-[550px]:text-xl text-[#E8D4C5] arabic-gold tracking-wider mb-2.5 sm:mb-3 max-h-[550px]:mb-1 font-normal leading-relaxed">
            {bismillah.arabic}
          </p>
          <p className="text-xs sm:text-sm max-h-[550px]:text-[11px] tracking-[0.2em] uppercase font-medium text-[#F5E6DC] font-sans max-w-md mx-auto">
            {bismillah.translation}
          </p>
        </motion.div>

        {/* Central Card Container */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.95 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="py-7 sm:py-10 max-h-[550px]:py-4 px-5 sm:px-10 max-h-[550px]:px-5 rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/80 shadow-[0_25px_70px_rgba(0,0,0,0.85)] w-full z-10 flex flex-col items-center relative flex-shrink"
        >
          {/* Dynamic Rotating Geometric Pattern (Clipped to card bounds) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform overflow-hidden rounded-3xl">
            <Islamic8PointStar className="w-[580px] h-[580px] sm:w-[650px] sm:h-[650px] text-[#E8D4C5]" />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(232,212,197,0.15)_0%,transparent_75%)] rounded-3xl" />

          {/* Corner Islamic Geometric Accents */}
          <CardCornerFiligree />

          {/* Monogram Crest */}
          <motion.div
            animate={
              isOpening
                ? {
                    scale: 0.38,
                    y: typeof window !== "undefined" && window.innerHeight < 550 ? -120 : -190,
                    filter: "drop-shadow(0 0 25px rgba(232,212,197,0.95))",
                  }
                : {
                    scale: 1,
                    y: 0,
                  }
            }
            transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="my-2 sm:my-2.5 max-h-[550px]:my-1 z-30 cursor-pointer flex items-center justify-center transform-gpu"
          >
            <FSMonogramCalligraphy className="h-20 sm:h-26 max-h-[550px]:h-14 w-auto" />
          </motion.div>

          {/* Card Details */}
          <motion.div
            animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-full z-10"
          >
            <span className="text-xs max-h-[550px]:text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8D4C5] bg-[#E8D4C5]/10 px-4 py-1.5 max-h-[550px]:py-0.5 rounded-full border border-[#E8D4C5]/40 my-2 sm:my-2.5 max-h-[550px]:my-1 shadow-xs">
              The Wedding Reception
            </span>

            {/* Couple First Names with Gold Shimmer Typography */}
            <h1 className="font-display text-2xl sm:text-4xl max-h-[550px]:text-2xl text-[#FAF2ED] font-bold tracking-wider my-2 sm:my-2.5 max-h-[550px]:my-1 leading-tight gold-shimmer-text">
              {groom.shortName} <span className="font-script text-[#E8D4C5] font-normal text-3xl sm:text-5xl max-h-[550px]:text-2xl mx-1">&amp;</span> {bride.shortName}
            </h1>

            <IslamicArchDivider className="my-2.5 sm:my-3 max-h-[550px]:my-1.5" />

            {/* Wedding Date */}
            <p className="font-serif text-sm sm:text-base max-h-[550px]:text-xs text-[#F5E6DC] tracking-wider font-semibold mb-1">
              {wedding.displayDate}
            </p>

            {/* Open Invitation Pill Button inside Card */}
            <div className="mt-5 sm:mt-6 max-h-[550px]:mt-3 mb-1">
              <button
                onClick={handleOpen}
                disabled={isOpening}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 max-h-[550px]:py-2 max-h-[550px]:px-6 rounded-full bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] text-[#160420] text-xs sm:text-sm max-h-[550px]:text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_12px_35px_rgba(232,212,197,0.5)] border border-[#FFF0E6] hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none disabled:opacity-80"
              >
                Open Invitation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
