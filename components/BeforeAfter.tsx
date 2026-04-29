"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section className="bg-black py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-4">
              Transformations
            </p>
            <h2
              className="font-anton uppercase text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              SEE THE
              <br />
              <span className="text-neon-green">DIFFERENCE</span>
            </h2>

            <div className="w-full h-px bg-gradient-to-r from-neon-green/50 to-transparent mb-6" />

            <p className="font-poppins text-white/60 leading-relaxed mb-8">
              From patchy, dry, and lifeless to lush, green, and vibrant — our expert
              care transforms your property into a space you can be truly proud of.
            </p>

            <button
              onClick={() => {
                const el = document.querySelector("#gallery");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-poppins text-neon-green text-sm font-semibold tracking-wider flex items-center gap-2 hover:gap-3 transition-all focus:outline-none"
            >
              View Full Gallery <span>→</span>
            </button>
          </motion.div>

          {/* Right: Before/After split image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
              {/* Before */}
              <div className="relative h-64 sm:h-80 group">
                <Image
                  src="/images/beforept1 landscape.png"
                  alt="Before landscaping transformation"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-anton text-white/80 text-lg tracking-wider">BEFORE</span>
                </div>
              </div>

              {/* After */}
              <div className="relative h-64 sm:h-80 group">
                <Image
                  src="/images/after shot landscapept2.png"
                  alt="After landscaping transformation"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                <div className="absolute bottom-4 right-4">
                  <span className="inline-block font-anton text-black text-lg tracking-wider bg-neon-green px-3 py-1 rounded">
                    AFTER
                  </span>
                </div>
              </div>
            </div>

            {/* Center divider with arrows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-10 h-10 bg-neon-green rounded-full flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="black">
                  <path d="M6 10l-4 0M6 10l-2-2M6 10l-2 2M14 10l4 0M14 10l2-2M14 10l2 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
