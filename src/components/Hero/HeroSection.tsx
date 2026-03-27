"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { HERO_MORPH_COLORS } from "@/lib/colors";

const COLOR_DURATION = 4000;

export function HeroSection() {
  const [colorIndex, setColorIndex] = useState(0);

  const advanceColor = useCallback(() => {
    setColorIndex((prev) => (prev + 1) % HERO_MORPH_COLORS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advanceColor, COLOR_DURATION);
    return () => clearInterval(interval);
  }, [advanceColor]);

  const current = HERO_MORPH_COLORS[colorIndex];

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-black">
      {/* Base car photo */}
      <div className="absolute inset-0">
        <Image
          src="/hero/car-base.jpg"
          alt="Prémium autófóliázás"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Color overlay — masked to car area only */}
      <div
        className="absolute inset-0 transition-all duration-[2000ms] ease-in-out pointer-events-none"
        style={{
          backgroundColor: current.hex,
          mixBlendMode: "color",
          opacity: 0.7,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
        }}
      />

      {/* Dark vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Main text */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
          <h1 className="font-bold tracking-tighter leading-[0.85]">
            <span className="block text-[15vw] md:text-[12vw] lg:text-[10vw] text-white opacity-95">
              AUTÓ
            </span>
            <span className="flex items-center gap-4 md:gap-6">
              <span className="text-[15vw] md:text-[12vw] lg:text-[10vw] text-white/60">
                FÓLIÁZÁS
              </span>
              <span className="text-white/40 text-[6vw] md:text-[4vw]">
                ›
              </span>
            </span>
          </h1>

          <div className="mt-6 md:mt-8 max-w-lg">
            <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed mb-6 md:mb-8">
              Az álmaidat építjük! Professzionális autófóliázás minősített
              anyagokkal Szombathelyen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <GlowButton href="#kapcsolat" size="lg">
                Ingyenes Árajánlat
              </GlowButton>
              <GlowButton href="#paletta" size="lg" variant="secondary">
                Színek Felfedezése
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Bottom: color indicator */}
        <div className="flex items-center gap-4 max-w-7xl mx-auto w-full">
          <div
            className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white/40 transition-colors duration-1000"
            style={{ backgroundColor: current.hex }}
          />
          <div className="text-xs md:text-sm font-mono">
            <span className="text-white/50">{current.brand}</span>
            <span className="text-white/30 mx-2">&middot;</span>
            <span className="text-white/70">{current.name}</span>
            {current.code && (
              <>
                <span className="text-white/30 mx-2">&middot;</span>
                <span className="text-white/40">{current.code}</span>
              </>
            )}
          </div>
          <div className="flex gap-1.5 ml-auto">
            {HERO_MORPH_COLORS.map((c, i) => (
              <button
                key={c.code + c.hex}
                onClick={() => setColorIndex(i)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  i === colorIndex
                    ? "bg-white scale-125"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
