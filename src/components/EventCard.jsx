import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Share2 } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";

export default function EventCard() {
  const { wedding, venue, addToCalendarLink, images, groom, bride } = weddingData;
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
    <section
      id="event"
      className="py-14 sm:py-20 max-h-[550px]:py-10 px-4 sm:px-6 bg-[#160420] text-[#FAF2ED] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 max-h-[520px]:mb-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8D4C5] block mb-1.5"
          >
            Celebration Venue &amp; Schedule
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl max-h-[520px]:text-3xl text-[#FAF2ED] font-bold"
          >
            Wedding Reception
          </motion.h2>
          <IslamicArchDivider className="my-3 max-h-[520px]:my-1.5" />
        </div>

        {/* Main Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#250A36]/95 border-2 border-[#E8D4C5]/60 overflow-hidden shadow-xl max-w-4xl mx-auto flex flex-col lg:flex-row relative"
        >
          <CardCornerFiligree />
          {/* Venue Image */}
          <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[420px] max-h-[520px]:min-h-[160px]">
            <img
              src={images.venuePhoto || venue.photo}
              alt={venue.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase tracking-widest bg-[#250A36]/95 text-[#F5E6DC] px-3.5 py-1 rounded-full border border-[#E8D4C5] font-semibold">
                Official Venue
              </span>
            </div>
          </div>

          {/* Details & Interactive Map */}
          <div className="lg:w-1/2 p-6 sm:p-8 max-h-[520px]:p-4 flex flex-col justify-between text-left">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#E8D4C5] bg-[#E8D4C5]/10 px-3 py-1 rounded-full mb-3 inline-block">
                Location &amp; Timings
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF2ED] font-bold mb-3">
                {venue.name}
              </h3>

              <div className="space-y-3 my-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#160420] text-[#E8D4C5] mt-0.5 shadow-xs border border-[#E8D4C5]/30">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#F5E6DC] font-bold">Date</p>
                    <p className="font-serif text-sm sm:text-base font-bold text-[#FAF2ED]">{wedding.displayDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#160420] text-[#E8D4C5] mt-0.5 shadow-xs border border-[#E8D4C5]/30">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#F5E6DC] font-bold">Time</p>
                    <p className="font-serif text-sm sm:text-base font-bold text-[#FAF2ED]">{wedding.displayTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#160420] text-[#E8D4C5] mt-0.5 shadow-xs border border-[#E8D4C5]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#F5E6DC] font-bold">Address</p>
                    <p className="font-sans text-xs sm:text-sm text-[#FAF2ED] font-medium">
                      {venue.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Map Preview */}
              {venue.mapEmbedUrl && (
                <div className="w-full h-32 rounded-xl overflow-hidden border border-[#E8D4C5]/40 mb-4 shadow-inner relative">
                  <iframe
                    title="Venue Location Map"
                    src={venue.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full pointer-events-none"
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-3 border-t border-[#E8D4C5]/30">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={venue.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#160420] to-[#250A36] text-[#E8D4C5] text-xs font-bold uppercase tracking-wider border border-[#E8D4C5] hover:scale-105 transition-all shadow-md group cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E8D4C5] group-hover:rotate-12 transition-transform" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={addToCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#160420] border-2 border-[#E8D4C5] text-[#E8D4C5] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-md cursor-pointer"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-[#E8D4C5]" />
                  <span>Add to Calendar</span>
                </a>
              </div>

              {/* Share Invitation Button below Add to Calendar */}
              <button
                onClick={handleShareSite}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#280B3B] via-[#320F48] to-[#280B3B] text-[#E8D4C5] text-xs font-bold uppercase tracking-wider border border-[#E8D4C5] hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#E8D4C5]" />
                <span>{shared ? "Link Copied!" : "Share Invitation"}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
