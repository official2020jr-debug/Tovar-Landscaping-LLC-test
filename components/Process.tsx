"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "📞",
    number: "01",
    title: "Free Consultation",
    desc: "Call or submit a request. We'll discuss your project, timeline, and vision at no cost.",
  },
  {
    icon: "📋",
    number: "02",
    title: "Custom Plan",
    desc: "We create a detailed plan and transparent quote — no hidden fees, no surprises.",
  },
  {
    icon: "🚛",
    number: "03",
    title: "We Get to Work",
    desc: "Our crew shows up on time and gets the job done right. Every detail, every time.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#0B1F0D" }}>
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <span className="font-anton text-white/[0.03] text-[20vw] whitespace-nowrap select-none">
          PROCESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-anton uppercase text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            OUR PROVEN <span className="text-brand-orange">PROCESS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-white/40 mt-4 max-w-lg mx-auto"
          >
            Simple, transparent, and built around getting you results. No runaround, no games.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div className="absolute top-14 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-neon-green/30 via-neon-green/60 to-neon-green/30 hidden sm:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center relative"
            >
              {/* Circle icon */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 relative z-10">
                <span className="text-3xl sm:text-5xl" role="img" aria-label={step.title}>{step.icon}</span>
              </div>

              <span className="font-poppins text-neon-green/30 text-xs tracking-widest block mb-2">
                STEP {step.number}
              </span>
              <h3 className="font-anton uppercase text-white text-xl mb-3">
                {step.title}
              </h3>
              <p className="font-poppins text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
