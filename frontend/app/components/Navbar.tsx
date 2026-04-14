"use client";

import React, { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-amber-200/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 transition hover:opacity-90"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 shadow-sm">
              <PawPrint className="h-5 w-5" />
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-extrabold tracking-tight text-stone-900 sm:text-xl">
                Shortlegs-N-Paws
              </h1>
              <p className="text-xs text-stone-500">
                Friendly, reliable cat sitting
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 transition hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700">
              From <span className="font-bold text-stone-900">£12/day</span>
            </div>
            <a
              href="#services"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600"
            >
              View Services
            </a>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-stone-800 transition hover:bg-amber-50 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[73px] z-40 border-b border-amber-200 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden
  transform transition-all duration-300 ease-in-out
  ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}
`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-stone-700 transition hover:bg-amber-50 hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 rounded-xl bg-stone-100 px-4 py-3 text-sm text-stone-700">
            <span className="font-semibold text-stone-900">Pricing:</span> £12
            for 1 daily visit / £16 for 2 daily visits
          </div>

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            View Services
          </a>
        </nav>
      </div>
    </>
  );
}
