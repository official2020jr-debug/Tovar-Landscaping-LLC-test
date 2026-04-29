"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  {
    city: "Nashville",
    desc: "Our home base. We serve all Nashville neighborhoods — from East Nashville to Bellevue and everywhere in between.",
    highlight: true,
  },
  {
    city: "Gallatin",
    desc: "Trusted Gallatin landscapers serving residential and commercial properties throughout Sumner County.",
    highlight: false,
  },
  {
    city: "Brentwood",
    desc: "Premium lawn care and hardscape for Brentwood's most discerning homeowners. We match your standards.",
    highlight: false,
  },
  {
    city: "Franklin",
    desc: "Full-service landscaping in Franklin, TN — from Westhaven to Cool Springs and all surrounding areas.",
    highlight: false,
  },
];

export default function ServiceAreas() {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-anton text-white/[0.02] whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          TENNESSEE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-3"
          >
            Where We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-anton uppercase text-neon-green neon-glow leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            WE COME TO YOU
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-white/50 max-w-lg mx-auto"
          >
            Proudly serving Middle Tennessee — from Nashville to the surrounding
            communities that deserve the same excellence.
          </motion.p>
        </div>

        {/* Neon divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mb-16 opacity-40" />

        {/* Area cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-5 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
                area.highlight
                  ? "bg-neon-green/5 border-neon-green/30 hover:bg-neon-green/10"
                  : "bg-[#0a0a0a] border-white/5 hover:border-neon-green/20"
              }`}
            >
              {area.highlight && (
                <span className="absolute top-4 right-4 font-poppins text-xs bg-neon-green text-black px-2 py-1 rounded-full font-semibold tracking-wider">
                  HQ
                </span>
              )}

              <MapPin
                size={24}
                className={`mb-4 ${
                  area.highlight ? "text-neon-green" : "text-white/30 group-hover:text-neon-green"
                } transition-colors`}
              />

              <h3
                className={`font-anton uppercase text-2xl mb-3 ${
                  area.highlight ? "text-neon-green" : "text-white group-hover:text-neon-green"
                } transition-colors`}
              >
                {area.city}
              </h3>

              <p className="font-poppins text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 font-poppins text-white/40 text-sm"
        >
          Don&apos;t see your area?{" "}
          <a
            href="tel:6159194742"
            className="text-neon-green hover:underline focus:outline-none"
          >
            Give us a call
          </a>{" "}
          — we may still be able to help.
        </motion.p>
      </div>
    </section>
  );
}
