"use client";

import React from "react";
import { Heart, Home, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image / visual side */}
        <div className="relative hidden sm:block">
          <div className="overflow-hidden rounded-3xl border border-amber-100 shadow-sm">
            <img
              src="cats/Bleu.jpg"
              alt="Cat sitting and care"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-6 rounded-2xl border border-amber-100 bg-white px-5 py-4 shadow-lg">
            <p className="text-sm text-stone-500">Calm, caring visits</p>
            <p className="text-lg font-bold text-stone-900">
              Bleu
            </p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            <Heart className="h-4 w-4" />
            About Shortlegs-N-Paws
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Gentle, dependable care while you’re away
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-stone-600">
            <p>
              Shortlegs-N-Paws is a friendly cat sitting service created to give
              owners peace of mind while they are away from home. The aim is
              simple: to provide reliable visits, kind care, and a calm routine
              that helps cats stay comfortable in the place they know best.
            </p>

            <p>
              Rather than moving your cat into an unfamiliar environment, each
              visit is carried out in your home so your cat can stay surrounded
              by their usual smells, spaces, and routine. This helps reduce
              stress and makes time away easier for both pets and owners.
            </p>

            <p>
              Every visit is focused on making sure your cat is fed, checked on,
              and given attention that suits their personality, whether that
              means playtime, affection, or simply a reassuring presence.
            </p>
          </div>

          {/* Trust cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-amber-100 bg-[#fffaf4] p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-stone-900">
                Caring approach
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Visits built around patience, comfort, and kindness.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-[#fffaf4] p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Home className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-stone-900">
                Home visits
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Cats stay relaxed in their own familiar environment.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-[#fffaf4] p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-stone-900">
                Reliable service
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Clear communication and dependable daily care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}