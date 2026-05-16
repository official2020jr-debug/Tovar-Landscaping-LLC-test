"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const galleryItems = [
  { id: 4,  src: "/images/gallery-4.jpg",  alt: "Grass and paver pathway",            height: "tall"  },
  { id: 8,  src: "/images/gallery-9.jpg",  alt: "Staircase and landscape detail",     height: "tall"  },
  { id: 9,  src: "/images/gallery-10.jpg", alt: "Patio installation project",         height: "short" },
  { id: 10, src: "/images/gallery-11.jpg", alt: "Landscape transformation",           height: "short" },
  { id: 11, src: "/images/gallery-12.jpg", alt: "Outdoor project completion",         height: "tall"  },
  { id: 12, src: "/images/gallery-13.jpg", alt: "Hardscape and lawn project",         height: "short" },
  { id: 13, src: "/images/gallery-14.jpg", alt: "Landscape project detail",           height: "tall"  },
  { id: 14, src: "/images/gallery-15.jpg", alt: "Concrete patio installation",        height: "short" },
  { id: 15, src: "/images/gallery-16.jpg", alt: "Concrete work and landscaping",      height: "short" },
  { id: 16, src: "/images/gallery-17.jpg", alt: "Outdoor hardscape project",          height: "tall"  },
];

const defaultItems = galleryItems.slice(0, 4);
const expandedItems = galleryItems.slice(4);

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = isExpanded ? galleryItems : defaultItems;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + visibleItems.length) % visibleItems.length : null
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % visibleItems.length : null
    );

  return (
    <section id="gallery" className="bg-[#050505] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-3"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-anton uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span className="text-white">REAL WORK. </span>
            <span className="text-brand-orange">REAL RESULTS.</span>
          </motion.h2>
        </div>

        {/* Default 4 images — 2-column masonry grid */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {defaultItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}

          {/* Expanded images revealed with animation */}
          <AnimatePresence>
            {isExpanded &&
              expandedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="break-inside-avoid mb-4 relative group cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => openLightbox(defaultItems.length + index)}
                >
                  <div
                    className={`relative w-full ${
                      item.height === "tall" ? "h-48 sm:h-72" : "h-36 sm:h-48"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                        <div className="w-12 h-12 border-2 border-neon-green rounded-full flex items-center justify-center mx-auto">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#39FF14"
                            strokeWidth="2"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* View Full Gallery Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="flex items-center gap-3 font-anton tracking-wider text-lg px-10 py-4 rounded border-2 border-neon-green text-neon-green bg-transparent hover:bg-neon-green hover:text-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
          >
            {isExpanded ? "SHOW LESS" : "VIEW FULL GALLERY"}
            <ChevronDown
              size={20}
              className="transition-transform duration-300"
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ height: "70vh" }}>
                <Image
                  src={visibleItems[lightboxIndex].src}
                  alt={visibleItems[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="absolute top-4 right-4">
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 bg-black/60 border border-white/20 rounded-full flex items-center justify-center hover:border-neon-green text-white hover:text-neon-green transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={18} />
                </button>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 rounded-full flex items-center justify-center hover:border-neon-green text-white hover:text-neon-green transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 rounded-full flex items-center justify-center hover:border-neon-green text-white hover:text-neon-green transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>

              <p className="text-center mt-4 font-poppins text-white/50 text-sm">
                {visibleItems[lightboxIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="break-inside-avoid mb-4 relative group cursor-pointer rounded-xl overflow-hidden"
      onClick={onClick}
    >
      <div
        className={`relative w-full ${
          item.height === "tall" ? "h-48 sm:h-72" : "h-36 sm:h-48"
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
            <div className="w-12 h-12 border-2 border-neon-green rounded-full flex items-center justify-center mx-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#39FF14"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
