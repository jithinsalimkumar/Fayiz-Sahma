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
      {/* Safe Flex Container ensuring top Bismillah starts at Y>=0 so scroll-up works in landscape */}
      <div className="min-h-full w-full flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6 pt-3 sm:pt-6 pb-8 sm:pb-10 my-auto">
        
        {/* Top Bismillah Calligraphy */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -30 : 0 }}
          transition={{ duration: 0.3 }}
          className="pt-1 sm:pt-2 mb-3 sm:mb-4 z-10 flex-shrink-0"
        >
          <p className="font-arabic text-2xl sm:text-4xl text-[#E8D4C5] arabic-gold tracking-wider mb-2.5 sm:mb-3 font-normal leading-relaxed">
            {bismillah.arabic}
          </p>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#F5E6DC] font-sans max-w-md mx-auto">
            {bismillah.translation}
          </p>
        </motion.div>

        {/* Central Card Container - Full Prominent Original Size */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.95 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="py-7 sm:py-9 px-5 sm:px-12 rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/80 shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-w-md sm:max-w-lg w-full z-10 flex flex-col items-center relative flex-shrink my-1"
        >
          {/* Dynamic Rotating Geometric Pattern (Clipped to card bounds) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform overflow-hidden rounded-3xl">
            <Islamic8PointStar className="w-[550px] h-[550px] sm:w-[620px] sm:h-[620px] text-[#E8D4C5]" />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(232,212,197,0.15)_0%,transparent_75%)] rounded-3xl" />

          {/* Corner Islamic Geometric Accents */}
          <CardCornerFiligree />

          {/* Monogram Crest - Full Prominent Sizing */}
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
            className="my-2 sm:my-3 z-30 cursor-pointer flex items-center justify-center transform-gpu"
          >
            <FSMonogramCalligraphy className="h-20 sm:h-26 w-auto" />
          </motion.div>

          {/* Card Details */}
          <motion.div
            animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-full z-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8D4C5] bg-[#E8D4C5]/10 px-4 py-1 sm:py-1.5 rounded-full border border-[#E8D4C5]/40 my-2 shadow-xs">
              The Wedding Reception
            </span>

            {/* Couple First Names with Gold Shimmer Typography */}
            <h1 className="font-display text-2xl sm:text-4xl text-[#FAF2ED] font-bold tracking-wider my-2 sm:my-2.5 leading-tight gold-shimmer-text">
              {groom.shortName} <span className="font-script text-[#E8D4C5] font-normal text-3xl sm:text-5xl mx-1">&amp;</span> {bride.shortName}
            </h1>

            <IslamicArchDivider className="my-2 sm:my-3" />

            {/* Wedding Date */}
            <p className="font-serif text-sm sm:text-base text-[#F5E6DC] tracking-wider font-semibold">
              {wedding.displayDate}
            </p>

            {/* Open Invitation Pill Button inside Card */}
            <div className="mt-5 sm:mt-6 mb-1">
              <button
                onClick={handleOpen}
                disabled={isOpening}
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] text-[#160420] text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(232,212,197,0.45)] border border-[#FFF0E6] hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none disabled:opacity-80"
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
