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
      className="fixed inset-0 w-full h-full flex flex-col justify-between items-center px-6 py-12 bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-center overflow-hidden z-50"
    >
      {/* Top Bismillah Calligraphy */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -30 : 0 }}
        transition={{ duration: 0.3 }}
        className="pt-6 mb-3 sm:mb-4 z-10"
      >
        <p className="font-arabic text-2xl sm:text-3xl text-[#D4AF37] arabic-gold tracking-wider mb-2 font-normal leading-relaxed">
          {bismillah.arabic}
        </p>
        <p className="text-xs tracking-[0.25em] uppercase font-medium text-[#FCD34D] font-sans max-w-md mx-auto">
          {bismillah.translation}
        </p>
      </motion.div>

      {/* Central Card Container */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.95 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="my-auto py-10 px-8 sm:px-16 rounded-3xl bg-[#064E3B]/95 border-2 border-[#D4AF37] shadow-[0_15px_50px_rgba(0,0,0,0.6)] max-w-lg w-full z-10 flex flex-col items-center relative"
      >
        {/* Dynamic Rotating Geometric Pattern (Clipped to card bounds) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-14 rotate-slow transform-gpu will-change-transform overflow-hidden rounded-3xl">
          <Islamic8PointStar className="w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] text-[#D4AF37]" />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_75%)] rounded-3xl" />

        {/* Corner Islamic Geometric Accents */}
        <CardCornerFiligree />

        {/* Monogram Crest - Unzooms / Scales down & glides straight into top header position */}
        <motion.div
          animate={
            isOpening
              ? {
                  scale: 0.38,
                  y: -190,
                  filter: "drop-shadow(0 0 25px rgba(212,175,55,0.95))",
                }
              : {
                  scale: 1,
                  y: 0,
                }
          }
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="my-2 z-30 cursor-pointer flex items-center justify-center transform-gpu"
        >
          <FSMonogramCalligraphy className="h-28 sm:h-36 w-auto" />
        </motion.div>

        {/* Card Details (Fades out smoothly when opening to focus on Monogram) */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-full z-10"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 my-3 shadow-xs">
            The Wedding Reception
          </span>

          {/* Couple First Names with Gold Shimmer Typography */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF6EE] font-bold tracking-wider my-2 leading-tight gold-shimmer-text">
            {groom.shortName} <span className="font-script text-[#D4AF37] font-normal text-4xl sm:text-5xl mx-1.5">&amp;</span> {bride.shortName}
          </h1>

          <IslamicArchDivider className="my-3" />

          {/* Wedding Date */}
          <p className="font-serif text-sm sm:text-base text-[#FCD34D] tracking-wider font-semibold">
            {wedding.displayDate}
          </p>

          {/* Open Invitation Pill Button inside Card */}
          <div className="mt-7 mb-2">
            <button
              onClick={handleOpen}
              disabled={isOpening}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] text-[#064E3B] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(212,175,55,0.45)] border border-[#FFF4D0] hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none disabled:opacity-80"
            >
              Open Invitation
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
