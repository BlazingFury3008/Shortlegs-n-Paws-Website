"use client";

import React, { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryCard from "../GalleryCard";

const galleryImages = [
  {
    src: "/cats/Image1.jpg",
    alt: "Grey cat sitting comfortably on a perch",
    title: "Calm, comfortable visits",
    subtitle: "Taking time to help each cat feel relaxed and at ease.",
  },
  {
    src: "/cats/Image2.jpg",
    alt: "Fluffy ginger and white cat resting",
    title: "Time to settle and relax",
    subtitle: "Allowing your cat space to feel safe and comfortable.",
  },
  {
    src: "/cats/Image7.jpeg",
    alt: "Black and white cat resting on a bed",
    title: "Keeping routines familiar",
    subtitle: "Helping your cat stay settled in their own home.",
  },
  {
    src: "/cats/Image8.jpeg",
    alt: "White cat looking up close",
    title: "Gentle, one-to-one care",
    subtitle: "Building trust through calm and attentive visits.",
  },
  {
    src: "/cats/Image9.jpeg",
    alt: "Curious cat reaching up",
    title: "Play and interaction",
    subtitle: "Engaging with your cat in a way that suits them.",
  },
  {
    src: "/cats/Image10.jpeg",
    alt: "Cat being stroked by a window",
    title: "Affection and reassurance",
    subtitle: "Plenty of attention, care, and comforting interaction.",
  },
];

export default function Gallery() {
  const [mobileIndex, setMobileIndex] = useState(0);

  function goPrev() {
    setMobileIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  }

  function goNext() {
    setMobileIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  }

  function goTo(index: number) {
    setMobileIndex(index);
  }

  return (
    <section className="bg-[#fffaf4] py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-12">
          {/* Mobile carousel */}
          <div className="sm:hidden">
            <div className="relative">
              <GalleryCard
                src={galleryImages[mobileIndex].src}
                alt={galleryImages[mobileIndex].alt}
                title={galleryImages[mobileIndex].title}
                subtitle={galleryImages[mobileIndex].subtitle}
                imageHeight="h-64"
                open={true}
              />

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-md transition hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-md transition hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    mobileIndex === index
                      ? "w-7 bg-amber-500"
                      : "w-2.5 bg-amber-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={index}
                src={image.src}
                alt={image.alt}
                title={image.title}
                subtitle={image.subtitle}
                imageHeight="h-72"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
