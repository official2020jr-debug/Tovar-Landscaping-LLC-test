import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14",
        "deep-green": "#0B6623",
        "brand-orange": "#FF7A00",
        "brand-black": "#000000",
        "dark-green-bg": "#0B1F0D",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 1.5s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14",
          },
          "50%": {
            boxShadow: "0 0 25px #39FF14, 0 0 50px #39FF14, 0 0 80px #39FF14",
          },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
