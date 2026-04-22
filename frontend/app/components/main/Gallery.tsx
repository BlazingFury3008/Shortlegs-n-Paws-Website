"use client";

import React, { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryCard from "../GalleryCard";

const galleryImages = [
  {
    src: "/cats/Floppy.jpg",
    alt: "Floppy during a visit",
    title: "Calm home visits",
    subtitle: "'Floppy' during a visit",
  },
  {
    src: "/cats/Teddy.jpg",
    alt: "Curious cat looking at camera",
    title: "Gentle attention",
    subtitle: "Visits tailored to each cat's personality.",
  },
  {
    src: "/cats/Teddy.jpg",
    alt: "Cat being gently looked after",
    title: "Daily care",
    subtitle: "Food, water, litter, and wellbeing checks.",
  },
  {
    src: "/cats/Teddy.jpg",
    alt: "Cat resting comfortably indoors",
    title: "Stress-free routine",
    subtitle: "Helping cats stay settled while you are away.",
  },
  {
    src: "/cats/Teddy.jpg",
    alt: "Playful cat close-up",
    title: "Play and company",
    subtitle: "A little fun and companionship during each visit.",
  },
  {
    src: "/cats/Teddy.jpg",
    alt: "Cat sitting calmly by a window",
    title: "Peace of mind",
    subtitle: "Updates available so owners feel reassured.",
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
    <section className="bg-[#fffaf4] py-4 sm:py-20">
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
