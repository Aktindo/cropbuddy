"use client";

import { motion } from "framer-motion";
import { Wifi, Cpu, Languages, Gauge } from "lucide-react";
import { heroMetrics } from "@/data/domainData";
import Container from "@/components/ui/Container";

const metricIcons = [Gauge, Cpu, Wifi, Languages];

export default function Hero() {
  return (
    <section className="relative mesh-bg bg-radial-glow-emerald pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow-amber" />
      <Container className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-slate-50">
            Predict crop diseases before they strike.
            <br />
            <span className="text-emerald-400">100% offline.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
            An edge-native agricultural copilot combining INT8 vision transformers
            with micro-climate AI to protect Indian smallholder crops — no internet
            required.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {heroMetrics.map((metric, i) => {
              const Icon = metricIcons[i];
              return (
                <div key={metric.label} className="border-l border-emerald-500/20 pl-3">
                  <Icon className="h-4 w-4 text-amber-400 mb-2" strokeWidth={2} />
                  <div className="font-display text-2xl text-slate-100">{metric.value}</div>
                  <div className="mt-1 text-xs leading-snug text-slate-500">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Phone frame */}
          <div className="relative rounded-[2rem] border border-emerald-500/25 bg-slate-900/70 p-3 shadow-glow-emerald glass-card">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-slate-800 to-slate-950">
              {/* Leaf backdrop */}
              <svg
                viewBox="0 0 300 520"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#064E3B" />
                    <stop offset="100%" stopColor="#24292D" />
                  </linearGradient>
                </defs>
                <rect width="300" height="520" fill="url(#leafGrad)" />
                <path
                  d="M150 60 C 230 120, 250 260, 150 460 C 50 260, 70 120, 150 60 Z"
                  fill="#065F46"
                  opacity="0.55"
                />
                <path
                  d="M150 90 L150 430 M150 180 L110 150 M150 180 L190 150 M150 260 L100 230 M150 260 L200 230 M150 340 L110 315 M150 340 L190 315"
                  stroke="#10B981"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Disease lesion patches */}
                <ellipse cx="128" cy="235" rx="16" ry="11" fill="#78350F" opacity="0.85" />
                <ellipse cx="160" cy="300" rx="11" ry="8" fill="#92400E" opacity="0.8" />
              </svg>

              {/* Scan line */}
              <div className="absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-emerald-400/25 to-transparent" />

              {/* Bounding box */}
              <div className="absolute left-[32%] top-[38%] h-[70px] w-[100px] rounded border-2 border-amber-400/90">
                <span className="absolute -top-1 left-0 h-2 w-2 -translate-y-full border-t-2 border-l-2 border-amber-400" />
                <span className="absolute -top-1 right-0 h-2 w-2 -translate-y-full border-t-2 border-r-2 border-amber-400" />
              </div>

              {/* Diagnosis card */}
              <div className="absolute inset-x-3 bottom-3 rounded-lg border border-amber-500/30 bg-slate-950/85 px-3 py-2.5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-amber-300">Potato Late Blight</span>
                  <span className="text-xs text-emerald-400">96.4%</span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-emerald-500 to-amber-400" />
                </div>
                <span className="mt-1.5 block text-[10px] text-slate-500">Diagnosed in 380ms · fully offline</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
