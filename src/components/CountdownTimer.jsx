import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider } from "./IslamicPatternBg";

export default function CountdownTimer() {
  const { countdownTargetISO, wedding } = weddingData;

  const calculateTimeLeft = () => {
    const target = new Date(countdownTargetISO).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownTargetISO]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="py-12 sm:py-16 max-h-[520px]:py-8 px-4 sm:px-6 bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-[#FAF2ED] relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Title */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8D4C5] block mb-1.5"
        >
          Counting Down The Blessed Moments
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-5xl max-h-[520px]:text-3xl text-[#FAF2ED] font-bold"
        >
          Until The Wedding Reception
        </motion.h2>

        <IslamicArchDivider className="my-4 max-h-[520px]:my-2" />

        {/* Centerpiece Gold-on-Emerald Pulsing Numerals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-h-[520px]:gap-3 max-w-3xl mx-auto my-6 max-h-[520px]:my-3">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 max-h-[520px]:p-2.5 rounded-3xl bg-gradient-to-b from-[#160420] to-[#250A36] border-2 border-[#E8D4C5] gold-pulse-glow shadow-xl relative overflow-hidden group"
            >
              {/* Gold Shimmer Number Display */}
              <div className="h-14 sm:h-18 max-h-[520px]:h-10 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-3xl sm:text-5xl md:text-6xl max-h-[520px]:text-2xl font-extrabold gold-shimmer-text tracking-tight"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>

              <span className="text-[11px] sm:text-xs max-h-[520px]:text-[10px] uppercase tracking-[0.25em] font-bold text-[#F5E6DC] mt-1.5 max-h-[520px]:mt-0.5">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#F5E6DC] font-semibold tracking-wider">
          {wedding.displayDate} • {wedding.displayTime}
        </p>
      </div>
    </section>
  );
}
