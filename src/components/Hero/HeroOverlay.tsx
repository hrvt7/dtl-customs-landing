"use client";
import { useState, useEffect } from "react";
import { GlowButton } from "@/components/ui/GlowButton";
import { HERO_MORPH_COLORS } from "@/lib/colors";

const COLOR_DURATION = 3000;

export function HeroOverlay() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % HERO_MORPH_COLORS.length);
    }, COLOR_DURATION);
    return () => clearInterval(interval);
  }, []);

  const current = HERO_MORPH_COLORS[colorIndex];

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 md:justify-center md:pb-0 pointer-events-none">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dtl-navy via-dtl-dark/60 to-transparent md:bg-gradient-to-r md:from-dtl-dark/80 md:via-dtl-dark/40 md:to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dtl-navy to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto w-full">
        <div className="max-w-lg lg:max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-px bg-dtl-blue" />
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-dtl-accent uppercase">
              Szombathely
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 md:mb-6">
            <span className="text-white">Pr&eacute;mium</span>
            <br />
            <span className="bg-gradient-to-r from-dtl-blue to-dtl-accent bg-clip-text text-transparent">
              Aut&oacute;f&oacute;li&aacute;z&aacute;s
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-md leading-relaxed">
            Sz&iacute;n csere, PPF v&eacute;d&#337;f&oacute;lia &eacute;s
            &uuml;vegf&oacute;li&aacute;z&aacute;s &mdash; profi
            min&#337;s&eacute;gben, garanci&aacute;val.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12">
            <GlowButton href="#kapcsolat" size="lg">
              Ingyenes &Aacute;raj&aacute;nlat
            </GlowButton>
            <GlowButton href="#paletta" size="lg" variant="secondary">
              Sz&iacute;nek Felfedez&eacute;se
            </GlowButton>
          </div>

          {/* Color indicator */}
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white/30 transition-colors duration-1000"
              style={{ backgroundColor: current.hex }}
            />
            <span className="text-xs md:text-sm font-mono text-gray-500 tracking-wider">
              {current.name}
            </span>
            <div className="flex gap-1 ml-3 md:ml-4">
              {HERO_MORPH_COLORS.map((c, i) => (
                <div
                  key={c.hex}
                  className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-300 ${
                    i === colorIndex ? "bg-dtl-blue scale-125" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
