"use client";

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[500px] overflow-hidden bg-black">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/poster.jpg"
          className="absolute inset-0 w-full h-full object-contain sm:object-cover"
          style={{ objectPosition: "center center" }}
        >
          <source src="/hero/color-morph.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Warm vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 md:pt-24 pb-12 sm:pb-20 md:pb-24">
        {/* Label + Title */}
        <div className="max-w-7xl mx-auto w-full mt-4 sm:mt-0">
          {/* Space Grotesk label */}
          <span className="inline-block mb-4 text-[10px] sm:text-xs font-[family-name:var(--font-space-grotesk)] tracking-[0.3em] uppercase text-primary-container">
            DTL CUSTOMS &bull; EST. 2024
          </span>

          <h1 className="font-black tracking-[-0.06em] leading-[0.82] select-none">
            <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-on-surface">
              AUTÓ
            </span>
            <span className="block text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw] text-on-surface/40 text-stroke">
              FÓLIÁZÁS
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base text-outline leading-relaxed">
            Prémium autófóliázás Szombathelyen. Szín csere, PPF védőfólia, kerámia üvegfólia — professzionális kivitelezéssel.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <span className="text-[10px] sm:text-sm font-[family-name:var(--font-space-grotesk)] tracking-wider text-on-surface/40">
              DTL CUSTOMS
            </span>
            <span className="text-on-surface/20 mx-1">/</span>
            <span className="text-[10px] sm:text-sm font-[family-name:var(--font-space-grotesk)] text-on-surface/60">
              PPF & TINT & WRAP
            </span>
          </div>
          <div className="ml-auto text-[10px] sm:text-xs font-[family-name:var(--font-space-grotesk)] text-on-surface/30">
            Szombathely
          </div>
        </div>
      </div>
    </section>
  );
}
