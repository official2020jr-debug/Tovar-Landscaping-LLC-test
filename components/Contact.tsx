"use client";

import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle } from "lucide-react";
import Script from "next/script";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Orange glow accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-4">
              Ready to Get Started?
            </p>
            <h2
              className="font-anton uppercase text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              CALL NOW.
              <br />
              GET IT DONE{" "}
              <span className="text-brand-orange">RIGHT.</span>
            </h2>

            <p className="font-poppins text-neon-green text-lg font-semibold mb-8 tracking-wide">
              FREE ESTIMATES • FULLY INSURED • FAMILY OWNED
            </p>

            <a
              href="tel:6159194742"
              className="inline-flex items-center gap-3 sm:gap-4 bg-brand-orange hover:bg-orange-500 text-white font-anton tracking-wider text-lg sm:text-2xl px-6 sm:px-10 py-4 sm:py-6 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange mb-8 sm:mb-10"
            >
              <Phone size={28} />
              615-919-4742
            </a>

            <div className="flex flex-col gap-4 mt-2">
              <a
                href="mailto:Refugiotovar89@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors font-poppins text-sm"
              >
                <Mail size={18} className="text-neon-green" />
                Refugiotovar89@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/50 font-poppins text-sm">
                <Phone size={18} className="text-neon-green" />
                615-919-4742
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                "Family Owned & Operated",
                "Fully Insured",
                "Free Estimates",
                "On Time Every Time",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg px-3 py-2"
                >
                  <CheckCircle size={14} className="text-neon-green flex-shrink-0" />
                  <span className="font-poppins text-white/60 text-xs">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: LeadConnector Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8"
          >
            <h3 className="font-anton uppercase text-white text-2xl mb-2">
              GET YOUR FREE ESTIMATE
            </h3>
            <p className="font-poppins text-white/40 text-sm mb-6">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/8dPQB91Y1I1wTZWFUjQR"
              style={{ width: "100%", height: "490px", border: "none", borderRadius: "3px" }}
              id="inline-8dPQB91Y1I1wTZWFUjQR"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Facebook Ads"
              data-height="490"
              data-layout-iframe-id="inline-8dPQB91Y1I1wTZWFUjQR"
              data-form-id="8dPQB91Y1I1wTZWFUjQR"
              title="Get Free Estimate"
            />

            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
