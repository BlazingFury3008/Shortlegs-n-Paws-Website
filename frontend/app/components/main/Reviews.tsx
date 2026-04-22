"use client";

import React from "react";
import { Star, Quote, Heart, PawPrint } from "lucide-react";

type ReviewType = {
  name: string;
  date: string;
  review: string;
  source: string;
};

const reviews: ReviewType[] = [
  {
    name: "Garry M",
    date: "April 06, 2025",
    review:
      "Lisa stepped in at very short notice to look after our 2 girls, Lexy & Katy, for 5 nights. The cats instantly took to her, and they really enjoyed their playtime and cuddles from her. Lisa kept in touch daily with messages and lots of pics, which was really reassuring 👍. We would be very happy to recommend Lisa.\n\nThanks again Lisa 😀❤️",
    source: "https://catinaflat.co.uk/members/lisa-b-lisas-love-of-furry-pets/",
  },
  {
    name: "Rachael M",
    date: "January 04, 2025",
    review:
      "Booked Lisa to look after my furbabies while I was away over hogmanay as my regular sitter was unavailable. Lisa was really friendly, attentive and sent me lots of pictures which gave me a lot of reassurance. Came home to two very happy cats and a clean flat. Would highly recommend Lisa and would definitely use her again. ",
    source: "https://catinaflat.co.uk/members/lisa-b-lisas-love-of-furry-pets/",
  },
  {
    name: "Shona K",
    date: "March 07, 2026",
    review:
      "Lisa was amazing came home to two very happy cats think they were disappointed it was us coming through door and not Lisa. Lisa spent over an hour with them on every visit house was spotless we cldnt have asked for a better cat sitter hoping to make Lisa our regular sitter can't recommend her highly enough.",
    source: "https://catinaflat.co.uk/members/lisa-b-lisas-love-of-furry-pets/",
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
              {/* Top: rating + quote icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1 text-amber-500">
                  <PawPrint className="h-5 w-5 fill-current" />
                  <PawPrint className="h-5 w-5 fill-current" />
                  <PawPrint className="h-5 w-5 fill-current" />
                </div>

                <div className="rounded-full bg-white p-2 text-amber-600 shadow-sm">
                  <Quote className="h-4 w-4" />
                </div>
              </div>

              {/* Main review (bring this UP) */}
              <p className="whitespace-pre-line text-sm leading-7 text-stone-600 sm:text-base">
                “{review.review}”
              </p>

              {/* Footer: name + date + source */}
              <div className="mt-6 border-t border-amber-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-stone-900">
                      {review.name}
                    </p>
                    <p className="text-sm text-stone-500">{review.date}</p>
                  </div>

                  <a
                    href={review.source}
                    className="text-sm text-amber-600 hover:underline"
                  >
                    View source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
