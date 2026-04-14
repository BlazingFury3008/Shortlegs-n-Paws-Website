"use client";

import React from "react";
import { Camera, PawPrint } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop",
    alt: "Relaxed cat lying down",
  },
  {
    src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
    alt: "Curious cat looking at camera",
  },
  {
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop",
    alt: "Cat being gently looked after",
  },
  {
    src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop",
    alt: "Cat resting comfortably indoors",
  },
  {
    src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1200&auto=format&fit=crop",
    alt: "Playful cat close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
    alt: "Cat sitting calmly by a window",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fffaf4] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            <Camera className="h-4 w-4" />
            Gallery
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Happy cats, calm home visits
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
            A little look at the kind of calm, comfortable care Shortlegs-N-Paws
            is all about.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-12">
          {/* Mobile: horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-2 sm:hidden">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[80%] overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
