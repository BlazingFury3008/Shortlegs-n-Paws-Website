"use client";

import React, { useRef, useState } from "react";
import { Camera } from "lucide-react";
import GalleryCard from "../GalleryCard";

const galleryImages = [
  {
    src: "cats/Floppy.jpg",
    alt: "Floppy during a visit",
    title: "Calm home visits",
    subtitle: "'Floppy' during a visit",
  },
  {
    src: "cats/Teddy.jpg",
    alt: "Curious cat looking at camera",
    title: "Gentle attention",
    subtitle: "Visits tailored to each cat`s personality.",
  },
  {
    src: "cats/Teddy.jpg",
    alt: "Cat being gently looked after",
    title: "Daily care",
    subtitle: "Food, water, litter, and wellbeing checks.",
  },
  {
    src: "cats/Teddy.jpg",
    alt: "Cat resting comfortably indoors",
    title: "Stress-free routine",
    subtitle: "Helping cats stay settled while you are away.",
  },
  {
    src: "cats/Teddy.jpg",
    alt: "Playful cat close-up",
    title: "Play and company",
    subtitle: "A little fun and companionship during each visit.",
  },
  {
    src: "cats/Teddy.jpg",
    alt: "Cat sitting calmly by a window",
    title: "Peace of mind",
    subtitle: "Updates available so owners feel reassured.",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleMobileCardClick(index: number) {
    const nextIndex = selectedIndex === index ? null : index;
    setSelectedIndex(nextIndex);

    if (nextIndex !== null) {
      const el = cardRefs.current[nextIndex];

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }

  return (
    <section id="gallery" className="bg-[#fffaf4] py-16 sm:py-20">
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
          {/* Mobile */}
          <div className="flex gap-4 overflow-x-auto px-[10%] pb-2 sm:hidden">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`min-w-[80%] shrink-0 transition-all duration-300 ${
                  selectedIndex === index ? "scale-[1.02]" : "scale-100"
                }`}
              >
                <GalleryCard
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  subtitle={image.subtitle}
                  imageHeight="h-52"
                  open={selectedIndex === index}
                  onClick={() => handleMobileCardClick(index)}
                />
              </div>
            ))}
          </div>

          {/* Desktop */}
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