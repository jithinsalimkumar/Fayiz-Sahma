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
      className="fixed inset-0 w-full h-screen h-[100vh] flex flex-col items-center justify-center p-3 sm:p-5 lg:p-6 bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-center overflow-hidden z-50 select-none"
    >
      {/* Top Bismillah Calligraphy */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -30 : 0 }}
        transition={{ duration: 0.3 }}
        className="mb-2 sm:mb-3 lg:mb-4 z-10 flex-shrink-0"
      >
        <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#E8D4C5] arabic-gold tracking-wider mb-1 font-normal leading-relaxed">
          {bismillah.arabic}
        </p>
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium text-[#F5E6DC] font-sans max-w-md mx-auto">
          {bismillah.translation}
        </p>
      </motion.div>

      {/* Central Card Container */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.95 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="py-5 sm:py-7 lg:py-8 px-5 sm:px-10 lg:px-12 rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/80 shadow-[0_15px_50px_rgba(0,0,0,0.7)] max-w-md lg:max-w-lg w-full z-10 flex flex-col items-center relative flex-shrink max-h-[calc(100vh-100px)] justify-center"
      >
        {/* Dynamic Rotating Geometric Pattern (Clipped to card bounds) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform overflow-hidden rounded-3xl">
          <Islamic8PointStar className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] text-[#E8D4C5]" />
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
                  y: -190,
                  filter: "drop-shadow(0 0 25px rgba(232,212,197,0.95))",
                }
              : {
                  scale: 1,
                  y: 0,
                }
          }
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="my-1 sm:my-2 z-30 cursor-pointer flex items-center justify-center transform-gpu"
        >
          <FSMonogramCalligraphy className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto" />
        </motion.div>

        {/* Card Details (Fades out smoothly when opening to focus on Monogram) */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-full z-10"
        >
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8D4C5] bg-[#E8D4C5]/10 px-3.5 py-1 rounded-full border border-[#E8D4C5]/40 my-2 shadow-xs">
            The Wedding Reception
          </span>

          {/* Couple First Names with Gold Shimmer Typography */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FAF2ED] font-bold tracking-wider my-1 sm:my-1.5 leading-tight gold-shimmer-text">
            {groom.shortName} <span className="font-script text-[#E8D4C5] font-normal text-3xl sm:text-4xl mx-1">&amp;</span> {bride.shortName}
          </h1>

          <IslamicArchDivider className="my-2 sm:my-2.5" />

          {/* Wedding Date */}
          <p className="font-serif text-xs sm:text-sm lg:text-base text-[#F5E6DC] tracking-wider font-semibold">
            {wedding.displayDate}
          </p>

          {/* Open Invitation Pill Button inside Card */}
          <div className="mt-4 sm:mt-5 mb-1">
            <button
              onClick={handleOpen}
              disabled={isOpening}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] text-[#160420] text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] shadow-[0_10px_25px_rgba(232,212,197,0.45)] border border-[#FFF0E6] hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none disabled:opacity-80"
            >
              Open Invitation
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
