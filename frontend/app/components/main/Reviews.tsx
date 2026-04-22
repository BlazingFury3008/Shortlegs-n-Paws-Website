"use client";

import React from "react";
import { Star, Quote, Heart } from "lucide-react";

const reviews = [
  {
    name: "Emily R.",
    title: "Cat owner",
    review:
      "Absolutely lovely service. I felt so much more relaxed knowing my cat was being checked on at home, and the updates gave me real peace of mind while I was away.",
  },
  {
    name: "Daniel T.",
    title: "Happy customer",
    review:
      "Friendly, reliable, and clearly caring with animals. Everything was simple to arrange, and my cat stayed calm and comfortable in her normal routine.",
  },
  {
    name: "Sophie M.",
    title: "Returning client",
    review:
      "A wonderful experience from start to finish. It made such a difference having someone dependable visit twice a day, and I would happily book again.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-4 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            <Heart className="h-4 w-4" />
            Reviews
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Kind words from happy owners
          </h2>
        </div>

        {/* Review cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl border border-amber-100 bg-[#fffaf4] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>

                <div className="rounded-full bg-white p-2 text-amber-600 shadow-sm">
                  <Quote className="h-4 w-4" />
                </div>
              </div>

              <p className="text-sm leading-7 text-stone-600 sm:text-base">
                “{review.review}”
              </p>

              <div className="mt-6 border-t border-amber-100 pt-4">
                <p className="font-semibold text-stone-900">{review.name}</p>
                <p className="text-sm text-stone-500">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}