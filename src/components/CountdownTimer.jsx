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
      className="py-24 px-6 bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF6EE] relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Title */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2"
        >
          Counting Down The Blessed Moments
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl text-[#FAF6EE] font-bold"
        >
          Until The Wedding Reception
        </motion.h2>

        <IslamicArchDivider className="my-6" />

        {/* Centerpiece Gold-on-Emerald Pulsing Numerals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto my-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#022C22] to-[#064E3B] border-2 border-[#D4AF37] gold-pulse-glow shadow-xl relative overflow-hidden group"
            >
              {/* Gold Shimmer Number Display */}
              <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold gold-shimmer-text tracking-tight"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>

              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#FCD34D] mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#FCD34D] font-semibold tracking-wider">
          {wedding.displayDate} • {wedding.displayTime}
        </p>
      </div>
    </section>
  );
}
