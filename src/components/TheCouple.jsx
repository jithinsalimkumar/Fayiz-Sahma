import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, Islamic8PointStar, CardCornerFiligree } from "./IslamicPatternBg";

export default function TheCouple() {
  const { groom, bride, familyInvitationMessage } = weddingData;

  return (
    <section
      id="couple"
      className="py-24 px-3 sm:px-6 bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF6EE] relative overflow-hidden"
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
            className="font-serif text-4xl sm:text-5xl text-[#FAF6EE] font-bold"
          >
            The Blessed Couple
          </motion.h2>
          <IslamicArchDivider className="my-4" />
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-[#043327]/95 border border-[#D4AF37]/40 py-6 px-2 sm:p-8 lg:p-10 text-center flex flex-col items-center shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/80 transition-all duration-500"
          >
            <CardCornerFiligree />

            {/* Simple & Classy Islamic Arch Frame */}
            <div className="relative w-60 h-76 sm:w-68 sm:h-84 mb-8 flex flex-col items-center pt-3">
              {/* Refined 8-Point Star Apex Ornament */}
              <div className="absolute top-0 z-20 w-8 h-8 rounded-full bg-[#043327] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
                <Islamic8PointStar className="w-4 h-4 text-[#FCD34D]" />
              </div>

              {/* Clean Islamic Arch Outer Frame */}
              <div className="w-full h-full p-1.5 rounded-t-[140px_105px] rounded-b-2xl border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative bg-[#022C22] group-hover:border-[#FCD34D] transition-colors duration-500">
                {/* Inner Fine Gold Accent Ring */}
                <div className="w-full h-full rounded-t-[133px_98px] rounded-b-[10px] border border-[#D4AF37]/40 overflow-hidden relative bg-[#022C22] select-none">
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

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#022C22] bg-gradient-to-r from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] px-5 py-1.5 rounded-full mb-3 shadow-md border border-[#FFF5D6]/40">
              The Groom
            </span>

            <h3 className="w-full text-center font-allura text-[1.65rem] min-[360px]:text-[1.85rem] min-[400px]:text-3xl sm:text-[2.2rem] md:text-2xl min-[900px]:text-3xl lg:text-[2.1rem] xl:text-4xl text-[#FFF4D0] drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] font-normal mb-2 leading-tight whitespace-nowrap tracking-wide">
              {groom.name}
            </h3>

            {/* Parentage Lineage Section */}
            <div className="mt-1 flex flex-col items-center">
              <span className="text-[11px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
                Son Of
              </span>
              <p className="font-cormorant text-lg sm:text-xl text-[#FCD34D] italic leading-relaxed max-w-xs font-semibold">
                Abdul Majeed MT <span className="font-script text-[#D4AF37] font-normal text-2xl mx-1">&amp;</span> Fathima KK
              </p>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-[#043327]/95 border border-[#D4AF37]/40 py-6 px-2 sm:p-8 lg:p-10 text-center flex flex-col items-center shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/80 transition-all duration-500"
          >
            <CardCornerFiligree />

            {/* Simple & Classy Islamic Arch Frame */}
            <div className="relative w-60 h-76 sm:w-68 sm:h-84 mb-8 flex flex-col items-center pt-3">
              {/* Refined 8-Point Star Apex Ornament */}
              <div className="absolute top-0 z-20 w-8 h-8 rounded-full bg-[#043327] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
                <Islamic8PointStar className="w-4 h-4 text-[#FCD34D]" />
              </div>

              {/* Clean Islamic Arch Outer Frame */}
              <div className="w-full h-full p-1.5 rounded-t-[140px_105px] rounded-b-2xl border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative bg-[#022C22] group-hover:border-[#FCD34D] transition-colors duration-500">
                {/* Inner Fine Gold Accent Ring */}
                <div className="w-full h-full rounded-t-[133px_98px] rounded-b-[10px] border border-[#D4AF37]/40 overflow-hidden relative bg-[#022C22] select-none">
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

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#022C22] bg-gradient-to-r from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] px-5 py-1.5 rounded-full mb-3 shadow-md border border-[#FFF5D6]/40">
              The Bride
            </span>

            <h3 className="w-full text-center font-allura text-[1.65rem] min-[360px]:text-[1.85rem] min-[400px]:text-3xl sm:text-[2.2rem] md:text-2xl min-[900px]:text-3xl lg:text-[2.1rem] xl:text-4xl text-[#FFF4D0] drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] font-normal mb-2 leading-tight whitespace-nowrap tracking-wide">
              {bride.name}
            </h3>

            {/* Parentage Lineage Section */}
            <div className="mt-1 flex flex-col items-center">
              <span className="text-[11px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
                Daughter Of
              </span>
              <p className="font-cormorant text-lg sm:text-xl text-[#FCD34D] italic leading-relaxed max-w-xs font-semibold">
                Abdul Muthalib AK <span className="font-script text-[#D4AF37] font-normal text-2xl mx-1">&amp;</span> Rahmabi N
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
          className="rounded-3xl bg-gradient-to-br from-[#064E3B] to-[#0A5C36] text-white border-2 border-[#D4AF37] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 rotate-slow transform-gpu will-change-transform">
            <Islamic8PointStar className="w-[450px] h-[450px] text-[#D4AF37]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Invitation From The Families
          </span>

          <p className="font-cormorant text-lg sm:text-xl text-[#FAF6EE] leading-relaxed mb-6 max-w-2xl mx-auto italic font-medium">
            {familyInvitationMessage}
          </p>

          <p className="font-serif text-lg italic text-[#FCD34D] font-semibold">
            With love, prayers &amp; blessings from both families
          </p>
        </motion.div>
      </div>
    </section>
  );
}
