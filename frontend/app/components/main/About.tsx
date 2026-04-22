"use client";

import React from "react";
import { Heart, Home, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-4 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image / visual side */}
        <div className="relative hidden sm:block">
          <div className="overflow-hidden rounded-3xl border border-amber-100 shadow-sm">
            <img
              src="cats/Image4.jpg"
              alt="Cat sitting and care"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-6 rounded-2xl border border-amber-100 bg-white px-5 py-4 shadow-lg">
            <p className="text-sm text-stone-500">Calm, caring visits</p>
            <p className="text-lg font-bold text-stone-900">Bleu</p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            <Heart className="h-4 w-4" />A bit about myself
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Gentle, dependable care while you’re away
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-stone-600">
            <p>
              Hi, I'm Lisa, <br />I have always had a passion for animals. I
              grew up having pets and have been on pet-sitting sites for some
              years now.
            </p>

            <p>
              I decided it was time to venture out and get my own pet-sitting
              insurance and to grow my furry client base by setting up a small
              pet-sitting business.
            </p>

            <p>
              I currently work night shifts, giving me plenty of time for
              morning, afternoon, and evening visits to care for your pets in
              your own home whilst you are away on holiday or business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
