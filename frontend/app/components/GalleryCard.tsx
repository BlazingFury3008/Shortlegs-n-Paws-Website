"use client";

import React from "react";

type GalleryCardProps = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  imageHeight?: string;
  open?: boolean;
  onClick?: () => void;
};

export default function GalleryCard({
  src,
  alt,
  title,
  subtitle,
  className = "",
  imageHeight = "h-72",
  open = false,
  onClick,
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden rounded-3xl border border-amber-100 bg-white text-left shadow-sm transition ${className}`}
    >
      <div className={`relative overflow-hidden rounded-3xl ${imageHeight}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent transition duration-300 ${
            open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        <div
          className={`absolute inset-x-0 bottom-0 transition-all duration-300 ease-in-out ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          <div className="rounded-b-3xl bg-black/65 px-4 py-3 backdrop-blur-sm">
            {title && (
              <p className="text-sm font-semibold text-white sm:text-base">
                {title}
              </p>
            )}

            {subtitle && (
              <p className="mt-1 text-xs text-white/85 sm:text-sm">
                {subtitle}
              </p>
            )}

            {!title && !subtitle && (
              <p className="text-sm font-medium text-white">{alt}</p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}