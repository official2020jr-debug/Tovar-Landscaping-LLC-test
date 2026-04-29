"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { end: 8,   suffix: "+", label: "Years in Business"     },
  { end: 500, suffix: "+", label: "Projects Completed"    },
  { end: 4,   suffix: "",  label: "Cities Served"         },
  { end: 100, suffix: "%", label: "Customer Satisfaction" },
];

const pillars = [
  {
    icon: "🏗️",
    title: "Built to Last",
    desc: "We use premium materials and proven techniques. Everything we build is made to stand the test of time.",
  },
  {
    icon: "✅",
    title: "Get It Done Right",
    desc: "Right the first time, every time. We don't cut corners — we build our reputation on quality.",
  },
  {
    icon: "🚫",
    title: "No Shortcuts",
    desc: "If it's worth doing, it's worth doing properly. That's the Tovar standard on every job we touch.",
  },
];

const videoPanels = [
  "https://player.vimeo.com/video/1187875197?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1",
  "https://player.vimeo.com/video/1187873404?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1",
  "https://player.vimeo.com/video/1187876074?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1",
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-black">

      {/* 3-panel video background — each covers its third of the section */}
      <div className="absolute inset-0 z-0 flex" aria-hidden="true">
        {videoPanels.map((src, i) => (
          <div key={i} className="relative flex-1 overflow-hidden">
            <iframe
              src={src}
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "177.78%",
                height: "177.78%",
                minWidth: "100%",
                minHeight: "100%",
                transform: "translate(-50%, -50%)",
              }}
              title={`Background video panel ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Green bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon-green/5 to-transparent z-10" />

      {/* All content sits above videos */}
      <div className="max-w-7xl mx-auto relative z-20">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-3"
          >
            Our Track Record
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-anton uppercase text-white leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            NUMBERS THAT{" "}
            <span className="text-neon-green">SPEAK FOR THEMSELVES</span>
          </motion.h2>
        </div>

        {/* Stats + story */}
        <div ref={ref} className="flex flex-col gap-10 max-w-3xl mx-auto mb-16">

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black/50 border border-white/10 rounded-xl p-5 hover:border-neon-green/40 transition-colors text-center"
              >
                <div
                  className="font-anton text-neon-green leading-none mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-poppins text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Brand story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-poppins text-neon-green text-sm tracking-widest uppercase mb-2">
              Who We Are
            </p>
            <h3
              className="font-anton uppercase text-white leading-none mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
            >
              A HEALTHY LAWN{" "}
              <span className="text-brand-orange">STARTS HERE</span>
            </h3>
            <p className="font-poppins text-white/70 leading-relaxed mb-4 text-sm">
              Tovar Landscape LLC is a family-owned company with over 8 years of
              experience serving Nashville, Gallatin, Brentwood, and Franklin. We
              built this company on one principle: do the job right, every time.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                "Family Owned & Operated",
                "Fully Insured & Licensed",
                "Free Estimates on Every Job",
                "On Time, Every Time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-neon-green flex-shrink-0" />
                  <span className="font-poppins text-white/80 text-xs">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-5 border-l-4 border-neon-green bg-black/30 rounded-r-xl">
              <p className="font-poppins italic text-white/80 text-sm leading-relaxed mb-2">
                &ldquo;We take the time to understand your unique needs and preferences
                to ensure that your property reflects your vision.&rdquo;
              </p>
              <p className="font-anton text-neon-green text-xs tracking-wider">
                — REFUGIO TOVAR, FOUNDER
              </p>
            </div>
          </motion.div>
        </div>

        {/* Value pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center p-8 bg-black/30 border border-white/5 rounded-2xl hover:border-neon-green/30 transition-colors group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-anton uppercase text-white text-xl mb-3 group-hover:text-neon-green transition-colors">
                {pillar.title}
              </h3>
              <p className="font-poppins text-white/50 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
