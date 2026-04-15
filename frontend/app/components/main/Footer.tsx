"use client";

import React from "react";
import { PawPrint, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-amber-200 bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                <PawPrint className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Shortlegs-N-Paws
                </h3>
                <p className="text-sm text-stone-300">
                  Friendly, reliable cat sitting
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-300">
              Calm, caring home visits for cats, giving owners peace of mind
              while they are away and helping pets stay comfortable in the place
              they know best.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Quick Links
            </h4>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-stone-300 transition hover:text-amber-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="uppercase">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-sm text-stone-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-300" />
                <a
                  href="mailto:shortlegs_lisa@hotmail.co.uk"
                  className="transition hover:text-amber-300"
                >
                  Shortlegs_lisa@hotmail.co.uk
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-300" />
                <a
                  href="tel:+440000000000"
                  className="transition hover:text-amber-300"
                >
                  NUMBER-OPTIONAL
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-300" />
                <span>Glasgow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shortlegs-N-Paws. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition hover:text-amber-300">
              Privacy Policy - MOST LIKELY REQUIRED
            </a>
            <a href="#" className="transition hover:text-amber-300">
              Terms - REQUIRED
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}