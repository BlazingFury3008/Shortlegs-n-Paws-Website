"use client";

import React from "react";
import { PawPrint, Clock, Heart } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf4]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
              <PawPrint className="h-4 w-4" />
              Local & Trusted Cat Sitting
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-stone-900 sm:text-5xl">
              Loving care for your cat,
              <span className="block text-amber-600">
                right at home
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-lg text-stone-600">
              Going away? I’ll visit your cat at home, keeping them fed, happy,
              and stress-free in their own space. No kennels, no disruption —
              just calm, familiar care.
            </p>

            {/* Pricing */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="rounded-xl bg-white px-5 py-3 shadow-sm border border-amber-100">
                <p className="text-sm text-stone-500">1 visit per day</p>
                <p className="text-xl font-bold text-stone-900">£12</p>
              </div>

              <div className="rounded-xl bg-white px-5 py-3 shadow-sm border border-amber-100">
                <p className="text-sm text-stone-500">2 visits per day</p>
                <p className="text-xl font-bold text-stone-900">£16</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600"
              >
                View Services
              </a>

              <a
                href="#contact"
                className="rounded-full border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
              >
                Get in Touch
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-amber-500" />
                Loving care
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                Flexible visits
              </div>
              <div className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-amber-500" />
                Stress-free for pets
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
                alt="Happy cat"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-lg border border-amber-100 sm:block">
              <p className="text-sm text-stone-500">Happy visits</p>
              <p className="text-lg font-bold text-stone-900">
                Calm & Comfortable Cats 🐾
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}