"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thompson",
    location: "Nashville, TN",
    rating: 5,
    text: "Tovar Landscape completely transformed my backyard. I had a slope that was causing drainage issues for years — they graded it, installed a retaining wall, and put in a beautiful patio. Everything was done on time and exactly as promised. These guys don't mess around.",
  },
  {
    name: "Jennifer Caldwell",
    location: "Brentwood, TN",
    rating: 5,
    text: "Hands down the best landscaping company I've ever hired. They showed up on time, communicated throughout the entire project, and the finished result was jaw-dropping. My neighbors have been asking me who did the work. Professional, hardworking, and honest.",
  },
  {
    name: "Derek & Susan Mills",
    location: "Franklin, TN",
    rating: 5,
    text: "We had a massive tree fall during a storm and called Tovar. They were there the next day, removed the tree safely, ground the stump, and cleaned everything up perfectly. The price was fair and the service was exceptional. Will use them for everything going forward.",
  },
  {
    name: "Carlos Reyes",
    location: "Gallatin, TN",
    rating: 5,
    text: "I've used three different lawn care companies over the years and Tovar is the only one that actually does what they say. Consistent cuts, always on schedule, and they genuinely care about the health of your lawn. My grass has never looked this good.",
  },
  {
    name: "Amanda Price",
    location: "Nashville, TN",
    rating: 5,
    text: "From the first call to the final walkthrough, the experience was top-tier. They transformed a muddy disaster of a side yard into a beautiful hardscaped area with pavers and drainage. The craftsmanship is incredible and it looks like it's always been there.",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="bg-[#080808] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-3"
            >
              Client Reviews
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-anton uppercase text-white leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              WHAT OUR CLIENTS SAY
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 flex-shrink-0"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-poppins text-gray-800 text-xs font-semibold">4.9 Google Rating</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slideshow */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 sm:p-10"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={18} className="text-neon-green fill-neon-green" />
                ))}
              </div>
              <p className="font-poppins text-white/70 text-sm sm:text-base leading-relaxed italic mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-anton text-white text-xl tracking-wider">{t.name}</p>
                <p className="font-poppins text-neon-green text-xs tracking-widest uppercase mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-neon-green hover:border-neon-green transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-neon-green w-6 h-2"
                    : "bg-white/20 w-2 h-2 hover:bg-white/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-neon-green hover:border-neon-green transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
