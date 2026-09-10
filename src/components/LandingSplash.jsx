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
      className="fixed inset-0 w-full h-full min-h-screen bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-center overflow-y-auto overscroll-contain touch-pan-y z-50 select-none"
    >
      {/* 
        Responsive Centered Container:
        - Mobile Landscape (height < 600px): justify-start with pt-3 so Bismillah starts at Y>=0 (100% VISIBLE AT TOP, zero negative scroll bug!)
        - Mobile Portrait & Desktop (height >= 600px): justify-center with my-auto so (Bismillah + Card) fills ~80% of screen height with exact equal 10% top & bottom gaps
      */}
      <div className="w-full min-h-full flex flex-col items-center justify-start max-h-[600px]:justify-start min-[601px]:justify-center p-4 sm:p-6 py-6 max-h-[600px]:py-2 my-auto">
        
        {/* Top Bismillah Calligraphy */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -30 : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 sm:mb-6 max-h-[600px]:mb-1.5 z-10 flex-shrink-0"
        >
          <p className="font-arabic text-xl sm:text-2xl lg:text-3xl max-h-[600px]:text-base text-[#E8D4C5] arabic-gold tracking-wider mb-2 sm:mb-2.5 max-h-[600px]:mb-1 font-normal leading-relaxed">
            {bismillah.arabic}
          </p>
          <p className="text-[11px] sm:text-xs lg:text-sm max-h-[600px]:text-[10px] tracking-[0.2em] uppercase font-medium text-[#F5E6DC] font-sans max-w-md mx-auto">
            {bismillah.translation}
          </p>
        </motion.div>

        {/* Central Card Container - Formatted to fill 80% viewport height proportionally */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.95 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="py-8 sm:py-12 lg:py-14 max-h-[600px]:py-3 px-6 sm:px-12 lg:px-14 max-h-[600px]:px-4 rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/80 shadow-[0_25px_70px_rgba(0,0,0,0.85)] max-w-md sm:max-w-lg lg:max-w-xl w-full z-10 flex flex-col items-center justify-between min-h-[58vh] max-h-[600px]:min-h-0 relative flex-shrink my-1"
        >
          {/* Dynamic Rotating Geometric Pattern (Clipped to card bounds) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform overflow-hidden rounded-3xl">
            <Islamic8PointStar className="w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] text-[#E8D4C5]" />
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
            className="my-2 sm:my-3 max-h-[600px]:my-0.5 z-30 cursor-pointer flex items-center justify-center transform-gpu"
          >
            <FSMonogramCalligraphy className="h-22 sm:h-26 lg:h-30 max-h-[600px]:h-12 w-auto" />
          </motion.div>

          {/* Card Details */}
          <motion.div
            animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-full z-10"
          >
            <span className="text-xs max-h-[600px]:text-[9px] font-bold uppercase tracking-[0.25em] text-[#E8D4C5] bg-[#E8D4C5]/10 px-4 py-1.5 max-h-[600px]:py-0.5 rounded-full border border-[#E8D4C5]/40 my-2 sm:my-3 max-h-[600px]:my-0.5 shadow-xs">
              The Wedding Reception
            </span>

            {/* Couple First Names with Gold Shimmer Typography */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl max-h-[600px]:text-xl text-[#FAF2ED] font-bold tracking-wider my-2.5 sm:my-3.5 max-h-[600px]:my-0.5 leading-tight gold-shimmer-text">
              {groom.shortName} <span className="font-script text-[#E8D4C5] font-normal text-4xl sm:text-5xl lg:text-6xl max-h-[600px]:text-2xl mx-1.5">&amp;</span> {bride.shortName}
            </h1>

            <IslamicArchDivider className="my-3 sm:my-4 max-h-[600px]:my-1" />

            {/* Wedding Date */}
            <p className="font-serif text-sm sm:text-base lg:text-lg max-h-[600px]:text-xs text-[#F5E6DC] tracking-wider font-semibold mb-1">
              {wedding.displayDate}
            </p>

            {/* Open Invitation Pill Button inside Card */}
            <div className="mt-6 sm:mt-8 max-h-[600px]:mt-2 mb-1">
              <button
                onClick={handleOpen}
                disabled={isOpening}
                className="inline-flex items-center justify-center px-9 sm:px-11 py-3.5 sm:py-4 max-h-[600px]:py-1.5 max-h-[600px]:px-5 rounded-full bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] text-[#160420] text-xs sm:text-sm max-h-[600px]:text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_12px_35px_rgba(232,212,197,0.5)] border border-[#FFF0E6] hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none disabled:opacity-80"
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
