"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, ChevronDown, Shield, Clock, Star, Home } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: [0.25, 0, 0, 1] },
  }),
};

const trustBadges = [
  { icon: Clock, text: "8+ Years Experience" },
  { icon: Shield, text: "Fully Insured" },
  { icon: Star, text: "Free Estimates" },
  { icon: Home, text: "Family Owned" },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <iframe
          src="https://player.vimeo.com/video/1187521401?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&playsinline=1"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw",
            minHeight: "100%",
            minWidth: "177.77vh",
            transform: "translate(-50%, -50%)",
          }}
          title="Tovar Landscape hero video"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Green bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-neon-green/5 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">

        {/* Pre-headline badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-neon-green/30 rounded-full bg-neon-green/10"
        >
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          <span className="font-poppins text-neon-green text-sm tracking-widest uppercase">
            Nashville&apos;s Most Trusted Landscaping Company
          </span>
        </motion.div>

        {/* Main headline — smaller & bold */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-anton uppercase leading-tight mb-3"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}
        >
          <span className="text-white block">NASHVILLE PREMIER</span>
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-anton uppercase leading-tight mb-8"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}
        >
          <span className="text-neon-green neon-glow block">LANDSCAPE EXPERTS</span>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-poppins text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)" }}
        >
          Family owned. Fully insured. Results driven. Serving Nashville, Gallatin,
          Brentwood & Franklin for over 8 years.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="tel:6159194742"
            className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-500 text-white font-anton tracking-wider text-lg px-8 py-4 rounded transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            style={{ minHeight: "56px" }}
          >
            <Phone size={20} />
            CALL NOW: 615-919-4742
          </a>
          <button
            onClick={() => scrollToSection("#contact")}
            className="flex items-center justify-center font-anton tracking-wider text-lg bg-neon-green text-black px-8 py-4 rounded animate-pulse-glow hover:bg-white transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
            style={{ minHeight: "56px" }}
          >
            GET FREE ESTIMATE
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/60">
              <Icon size={16} className="text-neon-green" />
              <span className="font-poppins text-sm">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-neon-green transition-colors focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="font-poppins text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-scroll-bounce" />
      </motion.button>
    </section>
  );
}
