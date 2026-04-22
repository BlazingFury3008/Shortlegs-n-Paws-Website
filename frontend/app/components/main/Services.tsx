"use client";

import React, { ReactNode } from "react";
import { Check, PawPrint, Clock3, Camera, Syringe } from "lucide-react";
import { serviceOptions } from "../data";



type IncludeType = {
  title: string;
  text: string;
  icon: ReactNode;
};

const includes: IncludeType[] = [
  {
    title: "Flexible routine",
    text: "Visits fit around your cat's normal feeding and comfort routine as closely as possible.",
    icon: <Clock3 className="h-5 w-5" />,
  },
  {
    title: "Updates for peace of mind",
    text: "You can receive updates after visits so you know your cat is safe, settled, and looked after.",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    title: "Care at home",
    text: "Your cat stays in their familiar environment, helping reduce stress while you're away.",
    icon: <PawPrint className="h-5 w-5" />,
  },
  {
    title: "Extra care when needed",
    text: "If your cat requires medication or extra care, it is provided within the standard pricing.",
    icon: <Syringe className="h-5 w-5" />,
  },
];

export default function Services() {
  return (
    <section className="bg-[#fffaf4] py-4 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            <PawPrint className="h-4 w-4" />
            Services & Pricing
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Simple, friendly cat sitting
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
            Straightforward daily visit options designed to keep your cat
            comfortable, cared for, and relaxed in their own home.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceOptions.map((service) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                service.highlight
                  ? "border-amber-300 ring-2 ring-amber-200"
                  : "border-amber-100"
              }`}
            >
              {service.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="max-w-md">
                <h3 className="text-2xl font-bold text-stone-900">
                  {service.title}
                </h3>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-amber-600">
                    £{service.price}
                  </span>
                  <span className="pb-1 text-sm text-stone-500">per day</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-stone-600 sm:text-base">
                  {service.subtitle}
                </p>
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  service.highlight
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "border border-amber-300 text-amber-700 hover:bg-amber-50"
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        {/* Included / Extra reassurance */}
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {includes.map((val) => {
            return (
              <div
                className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
                key={val.title}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  {val.icon}
                </div>
                <h4 className="text-base font-semibold text-stone-900">
                  {val.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {val.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
