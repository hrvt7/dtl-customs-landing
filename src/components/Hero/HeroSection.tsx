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
      {/* Car photo with CSS filter color change */}
      <div className="absolute inset-0">
        <Image
          src="/hero/car-base.jpg"
          alt="Prémium autófóliázás"
          fill
          className="object-cover object-center transition-[filter] duration-[2000ms] ease-in-out"
          style={{ filter: current.filter }}
          priority
          quality={90}
        />
      </div>

      {/* Dark vignette overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Main text — massive, integrated with the photo */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
          <div className="relative">
            <h1 className="font-black tracking-[-0.06em] leading-[0.82] select-none">
              <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-white">
                AUTO
              </span>
              <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-white/50">
                FOLIAZES
              </span>
            </h1>

            {/* Accent line */}
            <div className="mt-4 sm:mt-6 h-[2px] w-16 sm:w-24 bg-gradient-to-r from-dtl-blue to-transparent" />
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 max-w-md lg:max-w-lg">
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed mb-6 sm:mb-8">
              Professzionalis autofoliazes minositett anyagokkal Szombathelyen.
              Az almaidat epitjuk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <GlowButton href="#kapcsolat" size="lg">
                Ingyenes Arajanlat
              </GlowButton>
              <GlowButton href="#paletta" size="lg" variant="secondary">
                Szinek Felfedezese
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Bottom: color indicator — elegant, minimal */}
        <div className="flex items-center gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
          {/* Color dot with glow */}
          <div className="relative">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-[2000ms]"
              style={{ backgroundColor: current.hex }}
            />
            <div
              className="absolute inset-0 rounded-full blur-md transition-colors duration-[2000ms] opacity-60"
              style={{ backgroundColor: current.hex }}
            />
          </div>

          {/* Brand + Color name */}
          <div className="text-xs sm:text-sm font-mono tracking-wide">
            <span className="text-white/40">{current.brand}</span>
            <span className="text-white/20 mx-1.5 sm:mx-2">/</span>
            <span className="text-white/70 font-medium">{current.name}</span>
          </div>

          {/* Navigation dots */}
          <div className="flex gap-1 sm:gap-1.5 ml-auto">
            {HERO_MORPH_COLORS.map((c, i) => (
              <button
                key={c.code + c.hex}
                onClick={() => setColorIndex(i)}
                aria-label={`Switch to ${c.name}`}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-500 ${
                  i === colorIndex
                    ? "bg-white scale-125 shadow-[0_0_6px_rgba(255,255,255,0.5)]"
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
