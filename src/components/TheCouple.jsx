import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, Islamic8PointStar, CardCornerFiligree } from "./IslamicPatternBg";

export default function TheCouple() {
  const { groom, bride, familyInvitationMessage } = weddingData;

  return (
    <section
      id="couple"
      className="py-12 sm:py-16 max-h-[520px]:py-8 px-4 sm:px-6 bg-gradient-to-b from-[#160420] via-[#2A0C3D] to-[#160420] text-[#FAF2ED] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 max-h-[520px]:mb-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8D4C5] block mb-1.5"
          >
            With The Grace Of Almighty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl max-h-[520px]:text-3xl text-[#FAF2ED] font-bold"
          >
            The Blessed Couple
          </motion.h2>
          <IslamicArchDivider className="my-3 max-h-[520px]:my-1.5" />
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 max-h-[520px]:mb-6">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-[#20062E]/95 border border-[#E8D4C5]/40 py-6 px-4 sm:p-8 max-h-[520px]:py-4 text-center flex flex-col items-center shadow-2xl relative overflow-hidden group hover:border-[#E8D4C5]/80 transition-all duration-500"
          >
            <CardCornerFiligree />

            {/* Simple & Classy Islamic Arch Frame */}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 max-h-[520px]:w-44 max-h-[520px]:h-56 mb-5 max-h-[520px]:mb-3 flex flex-col items-center pt-3">
              {/* Refined 8-Point Star Apex Ornament */}
              <div className="absolute top-0 z-20 w-7 h-7 rounded-full bg-[#20062E] border-2 border-[#E8D4C5] flex items-center justify-center shadow-lg">
                <Islamic8PointStar className="w-3.5 h-3.5 text-[#F5E6DC]" />
              </div>

              {/* Clean Islamic Arch Outer Frame */}
              <div className="w-full h-full p-1.5 rounded-t-[140px_105px] rounded-b-2xl border-2 border-[#E8D4C5] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative bg-[#160420] group-hover:border-[#FFF0E6] transition-colors duration-500">
                {/* Inner Fine Gold Accent Ring */}
                <div className="w-full h-full rounded-t-[133px_98px] rounded-b-[10px] border border-[#E8D4C5]/40 overflow-hidden relative bg-[#160420] select-none">
                  <img
                    src={groom.photo}
                    alt={groom.name}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover object-top scale-[1.05] group-hover:scale-[1.10] transition-transform duration-700 ease-out pointer-events-none select-none"
                  />
                  {/* Transparent touch shield blocking native image zoom & long press popups without blocking scroll */}
                  <div className="absolute inset-0 z-10 pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} />
                </div>
              </div>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#160420] bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] px-4 py-1 rounded-full mb-2 shadow-md border border-[#FFF0E6]/40">
              The Groom
            </span>

            <h3 className="w-full text-center font-allura text-[1.65rem] min-[360px]:text-[1.85rem] min-[400px]:text-3xl sm:text-[2.2rem] md:text-2xl min-[900px]:text-3xl lg:text-[2.1rem] xl:text-4xl text-[#FFF0E6] drop-shadow-[0_4px_12px_rgba(232,212,197,0.4)] font-normal mb-1 leading-tight whitespace-nowrap tracking-wide">
              {groom.name}
            </h3>

            {/* Parentage Lineage Section */}
            <div className="mt-1 flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#E8D4C5] mb-0.5">
                Son Of
              </span>
              <p className="font-cormorant text-base sm:text-lg text-[#F5E6DC] italic leading-relaxed max-w-xs font-semibold">
                Abdul Majeed MT <span className="font-script text-[#E8D4C5] font-normal text-xl mx-1">&amp;</span> Fathima KK
              </p>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-[#20062E]/95 border border-[#E8D4C5]/40 py-6 px-4 sm:p-8 max-h-[520px]:py-4 text-center flex flex-col items-center shadow-2xl relative overflow-hidden group hover:border-[#E8D4C5]/80 transition-all duration-500"
          >
            <CardCornerFiligree />

            {/* Simple & Classy Islamic Arch Frame */}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 max-h-[520px]:w-44 max-h-[520px]:h-56 mb-5 max-h-[520px]:mb-3 flex flex-col items-center pt-3">
              {/* Refined 8-Point Star Apex Ornament */}
              <div className="absolute top-0 z-20 w-7 h-7 rounded-full bg-[#20062E] border-2 border-[#E8D4C5] flex items-center justify-center shadow-lg">
                <Islamic8PointStar className="w-3.5 h-3.5 text-[#F5E6DC]" />
              </div>

              {/* Clean Islamic Arch Outer Frame */}
              <div className="w-full h-full p-1.5 rounded-t-[140px_105px] rounded-b-2xl border-2 border-[#E8D4C5] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative bg-[#160420] group-hover:border-[#FFF0E6] transition-colors duration-500">
                {/* Inner Fine Gold Accent Ring */}
                <div className="w-full h-full rounded-t-[133px_98px] rounded-b-[10px] border border-[#E8D4C5]/40 overflow-hidden relative bg-[#160420] select-none">
                  <img
                    src={bride.photo}
                    alt={bride.name}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover object-top scale-[1.05] group-hover:scale-[1.10] transition-transform duration-700 ease-out pointer-events-none select-none"
                  />
                  {/* Transparent touch shield blocking native image zoom & long press popups without blocking scroll */}
                  <div className="absolute inset-0 z-10 pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} />
                </div>
              </div>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#160420] bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] px-4 py-1 rounded-full mb-2 shadow-md border border-[#FFF0E6]/40">
              The Bride
            </span>

            <h3 className="w-full text-center font-allura text-[1.65rem] min-[360px]:text-[1.85rem] min-[400px]:text-3xl sm:text-[2.2rem] md:text-2xl min-[900px]:text-3xl lg:text-[2.1rem] xl:text-4xl text-[#FFF0E6] drop-shadow-[0_4px_12px_rgba(232,212,197,0.4)] font-normal mb-1 leading-tight whitespace-nowrap tracking-wide">
              {bride.name}
            </h3>

            {/* Parentage Lineage Section */}
            <div className="mt-1 flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#E8D4C5] mb-0.5">
                Daughter Of
              </span>
              <p className="font-cormorant text-base sm:text-lg text-[#F5E6DC] italic leading-relaxed max-w-xs font-semibold">
                Abdul Muthalib AK <span className="font-script text-[#E8D4C5] font-normal text-xl mx-1">&amp;</span> Rahmabi N
              </p>
            </div>
          </motion.div>
        </div>

        {/* Warm Invitation Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-[#280B3B] to-[#1C0528] text-white border-2 border-[#E8D4C5] p-6 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 rotate-slow transform-gpu will-change-transform">
            <Islamic8PointStar className="w-[450px] h-[450px] text-[#E8D4C5]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8D4C5] block mb-2">
            Invitation From The Families
          </span>

          <p className="font-cormorant text-base sm:text-lg text-[#FAF2ED] leading-relaxed mb-4 max-w-2xl mx-auto italic font-medium">
            {familyInvitationMessage}
          </p>

          <p className="font-serif text-sm sm:text-base italic text-[#F5E6DC] font-semibold">
            With love, prayers &amp; blessings from both families
          </p>
        </motion.div>
      </div>
    </section>
  );
}
