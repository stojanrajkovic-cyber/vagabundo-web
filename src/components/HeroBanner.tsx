"use client";

import { useEffect, useState } from "react";
import { getHeroImage, getResolvedCountryLabel } from "@/lib/heroResolver";

type HeroBannerProps = {
  city: string;
  country?: string;
  days: number;
  pace: "relaxed" | "balanced" | "packed";
  dailyPlansCount: number;
};

function paceLabel(pace: HeroBannerProps["pace"]) {
  switch (pace) {
    case "relaxed":
      return "Relaxed pace";
    case "balanced":
      return "Balanced pace";
    case "packed":
      return "Packed pace";
    default:
      return pace;
  }
}

export default function HeroBanner({
  city,
  country,
  days,
  pace,
  dailyPlansCount
}: HeroBannerProps) {
  const image = getHeroImage(city, country);
  const countryLabel = getResolvedCountryLabel(city, country);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.scrollY * 0.2);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative mx-auto h-[420px] max-w-5xl overflow-hidden rounded-3xl md:h-[540px]">
      {/* Blurred background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(60px)",
          transform: `scale(1.3) translateY(${offsetY}px)`
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Main content area */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="flex h-full w-full items-center justify-center">
            <div className="relative inline-flex h-[92%] max-w-full items-center justify-center">
            <img
                src={image}
                alt={city}
                className="block h-full w-auto max-w-full rounded-3xl object-contain shadow-2xl"
            />

            {countryLabel && (
                <div className="absolute right-5 top-5 md:right-7 md:top-7">
                <span className="text-lg font-medium tracking-wide text-white/95 md:text-xl">
                    {countryLabel}
                </span>
                </div>
            )}
            </div>
        </div>
        </div>

      {/* Bottom-left city content */}
      <div className="absolute inset-0 z-20 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-10 pb-12 text-white">
          <div className="max-w-[420px]">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {city}
            </h1>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
                {days} {days === 1 ? "day" : "days"}
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
                {paceLabel(pace)}
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
                {dailyPlansCount} daily plan{dailyPlansCount === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Left-side readability gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[42%] bg-gradient-to-r from-black/40 to-transparent" />
    </section>
  );
}