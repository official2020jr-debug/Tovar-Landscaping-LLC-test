"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["Home", "Services", "About", "Gallery", "Contact"];
const services = [
  "Landscaping",
  "Hardscape",
  "Excavation",
  "Tree Services",
  "Storm Water Services",
  "Lawn Maintenance",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-deep-green py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-anton uppercase text-white text-xl sm:text-2xl tracking-wide text-center sm:text-left">
            Get started with professional lawn care today.
          </p>
          <a
            href="tel:6159194742"
            className="flex items-center gap-2 bg-neon-green text-black font-anton tracking-wider px-6 py-3 rounded-lg hover:bg-white transition-colors animate-pulse-glow focus:outline-none flex-shrink-0"
          >
            <Phone size={18} />
            GET A QUOTE
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#0B6623"/>
                  <path d="M8 16s0-4 4-6c0 0-1 4 4 6" stroke="#39FF14" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M6 18s0-3 3-4" stroke="#39FF14" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M18 18s0-3-3-4" stroke="#39FF14" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <line x1="12" y1="10" x2="12" y2="18" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-anton text-white text-lg tracking-wider block leading-none">TOVAR</span>
                <span className="font-anton text-neon-green text-xs tracking-widest block leading-none">LANDSCAPE</span>
              </div>
            </div>

            <p className="font-poppins text-white/40 text-sm leading-relaxed mb-6">
              Family owned landscaping company serving Nashville and Middle Tennessee with
              pride, craftsmanship, and zero shortcuts.
            </p>

            <p className="font-anton text-white/60 text-sm tracking-wider mb-6">
              &ldquo;BUILT TO LAST.{" "}
              <span className="text-brand-orange">DONE RIGHT.</span>&rdquo;
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Tovar-landscaping-LLC-100088416702799/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-neon-green hover:border-neon-green transition-colors focus:outline-none"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tovarlandscapingllc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-neon-green hover:border-neon-green transition-colors focus:outline-none"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-anton uppercase text-white tracking-wider text-sm mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                    className="font-poppins text-white/40 hover:text-neon-green text-sm transition-colors text-left focus:outline-none"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-anton uppercase text-white tracking-wider text-sm mb-6">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="font-poppins text-white/40 hover:text-neon-green text-sm transition-colors text-left focus:outline-none"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-anton uppercase text-white tracking-wider text-sm mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:6159194742"
                className="flex items-start gap-3 text-white/40 hover:text-neon-green transition-colors font-poppins text-sm"
              >
                <Phone size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                615-919-4742
              </a>
              <a
                href="mailto:Refugiotovar89@gmail.com"
                className="flex items-start gap-3 text-white/40 hover:text-neon-green transition-colors font-poppins text-sm"
              >
                <Mail size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                Refugiotovar89@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/40 font-poppins text-sm">
                <MapPin size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                <span>Nashville • Gallatin<br />Brentwood • Franklin, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 sm:mt-14 py-8 border-t border-white/5 border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              "Family Owned & Operated",
              "Fully Insured",
              "Quality Work Guaranteed",
              "On Time Every Time",
              "100% Customer Satisfaction",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                <span className="font-poppins text-white/40 text-xs tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-white/20 text-xs">
            © 2024 Tovar Landscape LLC. All rights reserved.
          </p>
          <p className="font-poppins text-white/20 text-xs">
            Serving Middle Tennessee since 2016
          </p>
        </div>
      </div>
    </footer>
  );
}
