import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Copy, Check, Share2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, Islamic8PointStar, CardCornerFiligree } from "./IslamicPatternBg";

export default function ClosingSection() {
  const { closingMessage, groom, bride, hashtag } = weddingData;
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText(hashtag);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#D4AF37", "#064E3B", "#FAF6EE", "#F59E0B"],
    });

    setTimeout(() => setCopied(false), 2500);
  };

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
    <footer className="py-24 px-6 bg-[#FAF6EE] dark:bg-[#022C22] relative overflow-hidden flex flex-col items-center text-center transition-colors duration-300">
      {/* Background Rotating Star Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-15 dark:opacity-25 rotate-slow">
        <Islamic8PointStar className="w-[550px] h-[550px] text-[#D4AF37]" />
      </div>

      <div className="max-w-3xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/60 shadow-xl relative"
        >
          <CardCornerFiligree />
          <IslamicArchDivider className="mb-6" />

          {/* Closing Dua Arabic */}
          <p className="font-arabic text-2xl sm:text-3xl text-[#064E3B] dark:text-[#FAF6EE] leading-relaxed mb-4 font-bold">
            {closingMessage.arabic}
          </p>

          {/* Closing Dua English */}
          <p className="font-serif text-lg text-[#0A5C36] dark:text-[#FCD34D] italic mb-8">
            "{closingMessage.english}"
          </p>

          {/* Share Invitation & Hashtag Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-6">
            <button
              onClick={handleShareSite}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#064E3B] to-[#0A5C36] text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37] shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{shared ? "Link Copied!" : "Share Invitation"}</span>
            </button>

            <button
              onClick={handleCopyHashtag}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF6EE] dark:bg-[#022C22] border-2 border-[#D4AF37] text-[#064E3B] dark:text-[#D4AF37] font-serif text-base font-bold shadow-md hover:scale-105 transition-all cursor-pointer group"
              title="Click to copy wedding hashtag"
            >
              <span>{hashtag}</span>
              {copied ? (
                <Check className="w-4 h-4 text-[#064E3B] dark:text-[#FAF6EE]" />
              ) : (
                <Copy className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              )}
            </button>
          </div>

          {copied && (
            <p className="text-xs font-bold text-[#064E3B] dark:text-[#FCD34D] animate-fade-in mt-2">
              Wedding hashtag copied! ✨
            </p>
          )}
        </motion.div>

        {/* Footer Credit Line */}
        <div className="mt-16 pt-8 border-t border-[#D4AF37]/30 flex flex-col items-center gap-2">
          <p className="font-serif text-2xl font-bold gold-shimmer-text">
            {groom.shortName} &amp; {bride.shortName}
          </p>
          <p className="text-xs tracking-widest uppercase font-bold text-[#064E3B] dark:text-[#FCD34D] flex items-center gap-1.5">
            <span>Made with love for {groom.shortName} &amp; {bride.shortName}</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
