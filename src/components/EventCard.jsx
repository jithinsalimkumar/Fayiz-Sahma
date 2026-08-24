import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, ExternalLink } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider, CardCornerFiligree } from "./IslamicPatternBg";

export default function EventCard() {
  const { wedding, venue, addToCalendarLink, images } = weddingData;

  return (
    <section
      id="event"
      className="py-24 px-6 bg-[#FAF6EE] dark:bg-[#022C22] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2"
          >
            Celebration Venue &amp; Schedule
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-[#064E3B] dark:text-[#FAF6EE] font-bold"
          >
            Wedding Reception
          </motion.h2>
          <IslamicArchDivider className="my-4" />
        </div>

        {/* Main Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/60 overflow-hidden shadow-xl max-w-4xl mx-auto flex flex-col lg:flex-row relative"
        >
          <CardCornerFiligree />
          {/* Venue Image */}
          <div className="lg:w-1/2 relative min-h-[280px] lg:min-h-[440px]">
            <img
              src={images.venuePhoto || venue.photo}
              alt={venue.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase tracking-widest bg-[#064E3B]/90 text-[#FCD34D] px-3.5 py-1 rounded-full border border-[#D4AF37] backdrop-blur-xs font-semibold">
                Official Venue
              </span>
            </div>
          </div>

          {/* Details & Interactive Map */}
          <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37] bg-[#064E3B]/10 dark:bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-4 inline-block">
                Location &amp; Timings
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#064E3B] dark:text-[#FAF6EE] font-bold mb-4">
                {venue.name}
              </h3>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#064E3B] text-[#D4AF37] mt-0.5 shadow-xs">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0A5C36] dark:text-[#FCD34D] font-bold">Date</p>
                    <p className="font-serif text-base font-bold text-[#064E3B] dark:text-[#FAF6EE]">{wedding.displayDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#064E3B] text-[#D4AF37] mt-0.5 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0A5C36] dark:text-[#FCD34D] font-bold">Time</p>
                    <p className="font-serif text-base font-bold text-[#064E3B] dark:text-[#FAF6EE]">{wedding.displayTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#064E3B] text-[#D4AF37] mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0A5C36] dark:text-[#FCD34D] font-bold">Address</p>
                    <p className="font-sans text-sm text-[#064E3B] dark:text-[#FAF6EE] font-medium">
                      {venue.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Map Preview */}
              {venue.mapEmbedUrl && (
                <div className="w-full h-36 rounded-xl overflow-hidden border border-[#D4AF37]/40 mb-6 shadow-inner">
                  <iframe
                    title="Venue Location Map"
                    src={venue.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D4AF37]/30">
              <a
                href={venue.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#064E3B] to-[#0A5C36] text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37] hover:scale-105 transition-all shadow-md group cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={addToCalendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FAF6EE] dark:bg-[#022C22] border-2 border-[#D4AF37] text-[#064E3B] dark:text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <CalendarPlus className="w-4 h-4 text-[#D4AF37]" />
                <span>Add to Calendar</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
