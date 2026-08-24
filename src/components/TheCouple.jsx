import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, Islamic8PointStar, CardCornerFiligree } from "./IslamicPatternBg";

export default function TheCouple() {
  const { groom, bride, familyInvitationMessage, images } = weddingData;

  return (
    <section
      id="couple"
      className="py-24 px-6 bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE0] to-[#FAF6EE] dark:from-[#022C22] dark:via-[#064E3B] dark:to-[#022C22] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2"
          >
            With The Grace Of Almighty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-[#064E3B] dark:text-[#FAF6EE] font-bold"
          >
            The Blessed Couple
          </motion.h2>
          <IslamicArchDivider className="my-4" />
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/50 p-8 sm:p-10 text-center flex flex-col items-center shadow-lg relative overflow-hidden group"
          >
            <CardCornerFiligree />
            {/* Islamic Geometric Arch / Medallion Mask Photo Frame */}
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 mb-6 rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#D4AF37] shadow-md gold-pulse-glow">
              <img
                src={groom.photo}
                alt={groom.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#064E3B] dark:text-[#022C22] bg-gradient-to-r from-[#D4AF37] to-[#FFF4D0] px-4 py-1 rounded-full mb-3 shadow-xs">
              The Groom
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#064E3B] dark:text-[#FAF6EE] font-bold mb-2">
              {groom.name}
            </h3>

            {/* Lineage Line */}
            <p className="font-sans text-sm text-[#0A5C36] dark:text-[#FCD34D] font-medium max-w-xs leading-relaxed">
              {groom.lineageLine}
            </p>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/50 p-8 sm:p-10 text-center flex flex-col items-center shadow-lg relative overflow-hidden group"
          >
            <CardCornerFiligree />
            {/* Islamic Geometric Arch / Medallion Mask Photo Frame */}
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 mb-6 rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#D4AF37] shadow-md gold-pulse-glow">
              <img
                src={bride.photo}
                alt={bride.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#064E3B] dark:text-[#022C22] bg-gradient-to-r from-[#D4AF37] to-[#FFF4D0] px-4 py-1 rounded-full mb-3 shadow-xs">
              The Bride
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#064E3B] dark:text-[#FAF6EE] font-bold mb-2">
              {bride.name}
            </h3>

            {/* Lineage Line */}
            <p className="font-sans text-sm text-[#0A5C36] dark:text-[#FCD34D] font-medium max-w-xs leading-relaxed">
              {bride.lineageLine}
            </p>
          </motion.div>
        </div>

        {/* Warm Invitation Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-[#064E3B] to-[#0A5C36] text-white border-2 border-[#D4AF37] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 rotate-slow">
            <Islamic8PointStar className="w-[450px] h-[450px] text-[#D4AF37]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Invitation From The Families
          </span>

          <p className="font-sans text-base sm:text-lg text-[#FAF6EE] leading-relaxed mb-6 max-w-2xl mx-auto">
            {familyInvitationMessage}
          </p>

          <p className="font-serif text-lg italic text-[#FCD34D] font-semibold">
            With love, prayers & blessings from both families
          </p>
        </motion.div>
      </div>
    </section>
  );
}
