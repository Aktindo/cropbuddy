"use client";

import { useState } from "react";
import { Leaf, Volume2, Menu, X } from "lucide-react";
import { navLinks } from "@/data/domainData";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/10 bg-slate-950">
      <Container className="!max-w-7xl flex min-h-16 items-center justify-between gap-5 2xl:gap-8">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <Leaf className="h-4 w-4 text-emerald-400" strokeWidth={2} />
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-amber-400" />
          </span>
          <span className="font-display text-lg text-slate-100">CropBuddy</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-5 2xl:flex 2xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-slate-400 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 2xl:flex">
          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/5 px-2.5 py-1.5 2xl:px-3">
            <Volume2 className="h-3.5 w-3.5 text-amber-400 animate-pulse-soft" />
            <span className="whitespace-nowrap text-xs text-amber-300">Vernacular voice enabled</span>
          </div>
          <a
            href="#architecture"
            className="whitespace-nowrap rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 transition-colors hover:bg-emerald-500/20 2xl:px-4"
          >
            View technical specs
          </a>
        </div>

        <button
          className="text-slate-300 2xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-emerald-500/10 bg-slate-950 px-6 py-4 space-y-3 2xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-slate-300 hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#architecture"
            onClick={() => setOpen(false)}
            className="block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-center text-sm text-emerald-300"
          >
            View technical specs
          </a>
        </div>
      )}
    </header>
  );
}
