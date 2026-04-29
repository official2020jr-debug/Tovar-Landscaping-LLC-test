"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M5 30 C10 10 30 10 35 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M12 30 C15 18 25 18 28 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <line x1="20" y1="15" x2="20" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="8" y="32" width="24" height="3" rx="1" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    name: "Landscaping",
    desc: "Full property transformations designed to enhance beauty and value. We turn outdoor spaces into showpieces.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="26" width="30" height="6" rx="1" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <rect x="8" y="20" width="24" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="11" y="14" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="5" y1="32" x2="35" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    name: "Hardscape",
    desc: "Patios, retaining walls, walkways, and outdoor living spaces built to last a lifetime.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 32 L30 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 8 L20 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 16 L20 8 L28 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M8 28 L32 28 L30 22 L10 22 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    name: "Excavation",
    desc: "Site prep, grading, and land clearing done right the first time. No surprises.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <line x1="20" y1="6" x2="20" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 10 C14 14 12 20 16 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M20 10 C26 14 28 20 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M20 18 C17 20 14 24 16 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M20 18 C23 20 26 24 24 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <line x1="14" y1="34" x2="26" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    name: "Tree Services",
    desc: "Safe, fast, professional tree removal, trimming, and stump grinding. No mess left behind.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 20 C8 14 12 8 20 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M20 8 C28 8 32 14 32 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M8 20 C8 26 12 32 20 32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M20 32 C28 32 32 26 32 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M14 24 L14 30 C14 32 18 34 20 34 C22 34 26 32 26 30 L26 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="20" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    name: "Storm Water Services",
    desc: "Drainage solutions that protect your property and prevent costly water damage problems.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="28" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="15" y="28" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="10" cy="28" r="2" fill="currentColor"/>
        <circle cx="18" cy="28" r="2" fill="currentColor"/>
        <path d="M6 28 L6 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 28 L22 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 20 C5 12 35 12 35 20 L35 24 L5 24 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="28" y1="24" x2="28" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 16 C10 10 30 10 30 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    name: "Lawn Maintenance",
    desc: "Consistent clean cuts. Healthy lawns. Reliable service every time, week after week.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-black py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-anton uppercase text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            OUR SERVICES
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-neon-green mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-poppins text-white/50 max-w-xl mx-auto"
          >
            Every job done right. No shortcuts. No excuses. Just results you can
            see and be proud of.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 sm:p-8 cursor-default transition-all duration-300 hover:-translate-y-2 card-hover-glow hover:border-neon-green/40"
            >
              {/* Orange top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent group-hover:via-neon-green/60 transition-all duration-300" />

              <div className="text-white/40 group-hover:text-neon-green transition-colors duration-300 mb-6">
                {service.icon}
              </div>

              <h3 className="font-anton uppercase text-white text-2xl mb-3 group-hover:text-neon-green transition-colors duration-300">
                {service.name}
              </h3>

              <p className="font-poppins text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {service.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-neon-green/0 group-hover:text-neon-green/70 transition-all duration-300">
                <span className="font-poppins text-xs tracking-wider uppercase">
                  Learn more
                </span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
