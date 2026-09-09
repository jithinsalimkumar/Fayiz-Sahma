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
      className="fixed inset-0 w-full h-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-6 max-h-[520px]:p-2 bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-center overflow-y-auto md:overflow-hidden max-h-[520px]:overflow-y-auto z-50 select-none"
    >
      {/* Top Bismillah Calligraphy */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -30 : 0 }}
        transition={{ duration: 0.3 }}
        className="pt-2 sm:pt-4 max-h-[520px]:pt-1 mb-3 md:mb-3 max-h-[520px]:mb-1.5 z-10 flex-shrink-0"
      >
        <p className="font-arabic text-2xl sm:text-3xl md:text-2xl lg:text-3xl max-h-[520px]:text-lg text-[#E8D4C5] arabic-gold tracking-wider mb-1 max-h-[520px]:mb-0.5 font-normal leading-relaxed">
          {bismillah.arabic}
        </p>
        <p className="text-xs max-h-[520px]:text-[10px] tracking-[0.25em] uppercase font-medium text-[#F5E6DC] font-sans max-w-md mx-auto">
          {bismillah.translation}
        </p>
      </motion.div>

      {/* Central Card Container */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.95 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="py-6 md:py-6 lg:py-8 max-h-[520px]:py-3 px-5 sm:px-12 max-h-[520px]:px-4 rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/80 shadow-[0_15px_50px_rgba(0,0,0,0.7)] max-w-lg w-full z-10 flex flex-col items-center relative flex-shrink md:max-h-[calc(100vh-120px)] max-h-[520px]:max-h-none justify-center"
      >
        {/* Dynamic Rotating Geometric Pattern (Clipped to card bounds) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform overflow-hidden rounded-3xl">
          <Islamic8PointStar className="w-[550px] h-[550px] sm:w-[600px] sm:h-[600px] text-[#E8D4C5]" />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(232,212,197,0.15)_0%,transparent_75%)] rounded-3xl" />

        {/* Corner Islamic Geometric Accents */}
        <CardCornerFiligree />

        {/* Monogram Crest - Unzooms / Scales down & glides straight into top header position */}
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
          className="my-1.5 md:my-1 max-h-[520px]:my-1 z-30 cursor-pointer flex items-center justify-center transform-gpu"
        >
          <FSMonogramCalligraphy className="h-24 md:h-24 lg:h-28 max-h-[520px]:h-14 w-auto" />
        </motion.div>

        {/* Card Details (Fades out smoothly when opening to focus on Monogram) */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-full z-10"
        >
          <span className="text-[11px] sm:text-xs max-h-[520px]:text-[9px] font-bold uppercase tracking-[0.25em] text-[#E8D4C5] bg-[#E8D4C5]/10 px-3.5 py-1 max-h-[520px]:py-0.5 rounded-full border border-[#E8D4C5]/40 my-2 md:my-2 max-h-[520px]:my-1 shadow-xs">
            The Wedding Reception
          </span>

          {/* Couple First Names with Gold Shimmer Typography */}
          <h1 className="font-display text-2xl sm:text-4xl md:text-3xl lg:text-4xl max-h-[520px]:text-xl text-[#FAF2ED] font-bold tracking-wider my-1.5 md:my-1.5 max-h-[520px]:my-0.5 leading-tight gold-shimmer-text">
            {groom.shortName} <span className="font-script text-[#E8D4C5] font-normal text-3xl sm:text-5xl md:text-4xl max-h-[520px]:text-2xl mx-1">&amp;</span> {bride.shortName}
          </h1>

          <IslamicArchDivider className="my-2 md:my-2 max-h-[520px]:my-1" />

          {/* Wedding Date */}
          <p className="font-serif text-xs sm:text-base max-h-[520px]:text-xs text-[#F5E6DC] tracking-wider font-semibold">
            {wedding.displayDate}
          </p>

          {/* Open Invitation Pill Button inside Card */}
          <div className="mt-4 md:mt-4 max-h-[520px]:mt-2 mb-1">
            <button
              onClick={handleOpen}
              disabled={isOpening}
              className="inline-flex items-center justify-center px-7 md:px-6 py-3 md:py-2.5 max-h-[520px]:py-1.5 max-h-[520px]:px-5 rounded-full bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] text-[#160420] text-xs sm:text-sm max-h-[520px]:text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(232,212,197,0.45)] border border-[#FFF0E6] hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none disabled:opacity-80"
            >
              Open Invitation
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
