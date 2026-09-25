import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          900: "#064E3B",
        },
        amber: {
          400: "#FBC02D",
          500: "#F59E0B",
        },
        slate: {
          800: "#30363A",
          600: "#929DA2",
          500: "#AEB8BD",
          400: "#C5CDD1",
          300: "#D7DEE1",
          950: "#191D20",
          900: "#24292D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "mesh-grid":
          "linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)",
        "radial-glow-emerald":
          "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.18), transparent 60%)",
        "radial-glow-amber":
          "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.12), transparent 55%)",
      },
      boxShadow: {
        "glow-emerald": "0 0 40px -10px rgba(16,185,129,0.45)",
        "glow-amber": "0 0 40px -10px rgba(245,158,11,0.4)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        scan: "scan 2.8s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
