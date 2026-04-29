"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-neon-green/10 py-3"
            : "bg-black/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center focus:outline-none"
            aria-label="Tovar Landscape home"
          >
            <Image
              src="/images/tovar-logo.jpg"
              alt="Tovar Landscape LLC"
              width={120}
              height={60}
              className="object-contain"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-poppins text-sm font-600 text-white/80 hover:text-neon-green transition-colors duration-200 tracking-wide focus:outline-none focus-visible:text-neon-green"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:6159194742"
              className="flex items-center gap-2 text-white/70 hover:text-neon-green text-sm font-poppins transition-colors"
            >
              <Phone size={14} />
              <span>615-919-4742</span>
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="font-anton tracking-wider text-sm bg-neon-green text-black px-5 py-2.5 rounded hover:bg-white transition-all duration-200 animate-pulse-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
            >
              GET FREE ESTIMATE
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus-visible:text-neon-green"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col pt-28 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-anton text-3xl sm:text-4xl text-white hover:text-neon-green text-left transition-colors focus:outline-none"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-12 flex flex-col gap-4">
              <a
                href="tel:6159194742"
                className="flex items-center gap-3 text-white/70 font-poppins"
              >
                <Phone size={18} className="text-neon-green" />
                615-919-4742
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="font-anton tracking-wider text-lg bg-neon-green text-black px-6 py-4 rounded animate-pulse-glow"
              >
                GET FREE ESTIMATE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
