import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { weddingData } from "../config/weddingData";
import { IslamicArchDivider } from "./IslamicPatternBg";

export default function PhotoGallery() {
  const photos = weddingData.images.galleryPhotos || [];
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  if (!photos.length) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE0] to-[#FAF6EE] dark:from-[#022C22] dark:via-[#064E3B] dark:to-[#022C22] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2"
          >
            Cherished Memories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-[#064E3B] dark:text-[#FAF6EE] font-bold"
          >
            Photo Gallery
          </motion.h2>
          <IslamicArchDivider className="my-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-md cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.caption || `Gallery photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-serif text-sm text-[#FCD34D] font-bold">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <div
            onClick={() => setActivePhotoIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl max-h-[85vh] rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl relative"
            >
              <img
                src={photos[activePhotoIndex].url}
                alt={photos[activePhotoIndex].caption}
                className="w-full h-full object-contain max-h-[75vh]"
              />
              {photos[activePhotoIndex].caption && (
                <div className="p-4 bg-[#064E3B] text-center">
                  <p className="font-serif text-base text-[#FCD34D] font-semibold">
                    {photos[activePhotoIndex].caption}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
