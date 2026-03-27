"use client";
import { GlowButton } from "@/components/ui/GlowButton";

export function HeroSection() {
  return (
    <section className="relative h-[70svh] sm:h-[85svh] md:h-[100svh] min-h-[500px] overflow-hidden bg-black">
      {/* Video background — the car color morphs naturally in the video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/poster.jpg"
          className="min-w-full min-h-full object-cover"
          style={{ objectPosition: "center 45%" }}
        >
          <source src="/hero/color-morph.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Vignette overlays — subtle, don't cover the car too much */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Main text — bege.hu style massive typography */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
          <div className="relative">
            <h1 className="font-black tracking-[-0.06em] leading-[0.82] select-none">
              <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-white">
                AUTÓ
              </span>
              <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-white/50">
                FÓLIÁZÁS
              </span>
            </h1>

            {/* Accent line */}
            <div className="mt-4 sm:mt-6 h-[2px] w-16 sm:w-24 bg-gradient-to-r from-dtl-blue to-transparent" />
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 max-w-md lg:max-w-lg">
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed mb-6 sm:mb-8">
              Professzionális autófóliázás minősített anyagokkal Szombathelyen.
              Az álmaidat építjük.
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

        {/* Bottom: DTL Customs badge */}
        <div className="flex items-center gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-dtl-blue animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-wider text-white/40">
              DTL CUSTOMS
            </span>
            <span className="text-white/20 mx-1">/</span>
            <span className="text-xs sm:text-sm font-mono text-white/60">
              PPF & TINT & WRAP
            </span>
          </div>
          <div className="ml-auto text-xs font-mono text-white/30">
            Szombathely
          </div>
        </div>
      </div>
    </section>
  );
}
