"use client";

export function HeroSection() {
  return (
    <section className="relative h-[60svh] sm:h-[85svh] md:h-[100svh] min-h-[400px] overflow-hidden bg-black">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 45%" }}
        >
          <source src="/hero/color-morph.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Minimal vignette — don't cover the car too much */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content — just the big title + bottom bar, no buttons on mobile */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-24">
        {/* Title only — positioned at top so car is visible */}
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="font-black tracking-[-0.06em] leading-[0.82] select-none">
            <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-white">
              AUTÓ
            </span>
            <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-white/50">
              FÓLIÁZÁS
            </span>
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-dtl-warm animate-pulse" />
            <span className="text-[10px] sm:text-sm font-mono tracking-wider text-white/40">
              DTL CUSTOMS
            </span>
            <span className="text-white/20 mx-1">/</span>
            <span className="text-[10px] sm:text-sm font-mono text-white/60">
              PPF & TINT & WRAP
            </span>
          </div>
          <div className="ml-auto text-[10px] sm:text-xs font-mono text-white/30">
            Szombathely
          </div>
        </div>
      </div>
    </section>
  );
}
