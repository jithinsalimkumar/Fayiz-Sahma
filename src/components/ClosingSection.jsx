import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, Islamic8PointStar, CardCornerFiligree } from "./IslamicPatternBg";

export default function ClosingSection() {
  const { closingMessage, groom, bride } = weddingData;
  const [shared, setShared] = useState(false);

  const handleShareSite = async () => {
    const shareData = {
      title: `${groom.shortName} & ${bride.shortName}'s Wedding Invitation`,
      text: `You are cordially invited to celebrate the wedding ceremony of ${groom.name} & ${bride.name}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Web Share cancelled", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    }
  };

  return (
    <footer className="py-24 px-6 bg-[#022C22] text-[#FAF6EE] relative overflow-hidden flex flex-col items-center text-center">
      {/* Background Rotating Star Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25 rotate-slow transform-gpu will-change-transform">
        <Islamic8PointStar className="w-[550px] h-[550px] text-[#D4AF37]" />
      </div>

      <div className="max-w-3xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl bg-[#064E3B]/95 border-2 border-[#D4AF37]/60 shadow-xl relative"
        >
          <CardCornerFiligree />
          <IslamicArchDivider className="mb-6" />

          {/* Closing Dua Arabic */}
          <p className="font-arabic text-3xl sm:text-4xl text-[#D4AF37] arabic-gold leading-loose mb-4 font-bold">
            {closingMessage.arabic}
          </p>

          {/* Closing Dua English */}
          <p className="font-serif text-lg text-[#FCD34D] italic mb-8">
            "{closingMessage.english}"
          </p>

          {/* Share Invitation Action */}
          <div className="flex items-center justify-center my-6">
            <button
              onClick={handleShareSite}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] via-[#0A5C36] to-[#064E3B] text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37] shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{shared ? "Link Copied!" : "Share Invitation"}</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Credit Line */}
        <div className="mt-16 pt-8 border-t border-[#D4AF37]/30 flex flex-col items-center gap-2">
          <p className="font-serif text-2xl font-bold gold-shimmer-text">
            {groom.shortName} &amp; {bride.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
