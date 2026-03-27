"use client";
import dynamic from "next/dynamic";
import { HeroOverlay } from "./HeroOverlay";

const CarScene = dynamic(
  () => import("./CarScene").then((m) => m.CarScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-dtl-dark flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-dtl-blue border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] md:min-h-[700px] overflow-hidden">
      <CarScene />
      <HeroOverlay />

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-mono tracking-[0.3em] text-gray-600 uppercase">
          G&ouml;rgess
        </span>
        <svg
          className="w-5 h-5 text-dtl-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
