"use client";
import Image from "next/image";

const STUDIO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC_V63UVnaB4SSFKODWlWXUlpkF9RTlcQRlF8plZwSV-WrVa0B_U7MEZNKlK95da-f7Hgue4Zm1PFZThXUc1y87W_XvMmPY5-zneFJFrCy8TdpuHb-bWJa3svpcAiSeH_6_tyaBUCqZ7MEO7n3bYq0jXAPOUitvCm3Sk_RTqVyRMvAfyMpeMPPmLsenP3ybq3tGpL2wJWW5kenBEKKIZ3UY4NCbIDjIjgacO_XGIizQUQ74uJOhrFjJEz1NVCmbRYwOMcuo7ZhYUkgw";

const STEPS = [
  {
    num: "01",
    title: "KONZULTÁCIÓ",
    desc: "Részletes állapotfelmérés és esztétikai célok megbeszélése. Prémium anyagok kiválasztása swatchgyűjteményünkből.",
  },
  {
    num: "02",
    title: "ELŐKÉSZÍTÉS",
    desc: "Többlépcsős tisztítási folyamat. Minden szennyeződést eltávolítunk a molekuláris szintű tapadás biztosítása érdekében.",
  },
  {
    num: "03",
    title: "TELEPÍTÉS",
    desc: "Klímavezérelt műhelyben történő felhelyezés. Kézi vagy plotter vágású precíziós munka minősített szakemberektől.",
  },
  {
    num: "04",
    title: "MINŐSÉGELLENŐRZÉS",
    desc: "Utókezelés utáni vizsgálat 5000K stúdió megvilágítás alatt. Végső detailing és hidrofób bevonat.",
  },
];

export function ProcessSection() {
  return (
    <section id="folyamat" className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block mb-3 text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] font-medium tracking-[0.25em] uppercase text-primary-container">
            Munkafolyamat
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase text-on-surface">
            A Folyamat
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left — Steps */}
          <div className="space-y-8 md:space-y-10">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-4 md:gap-6 group">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary-container/30 group-hover:text-primary-container transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
                {/* Content */}
                <div className="pt-1 md:pt-2">
                  <h3 className="text-base md:text-lg font-black tracking-wider uppercase text-on-surface">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base text-outline leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Stat badge */}
            <div className="inline-flex items-center gap-3 bg-surface-container-high border border-white/5 rounded-full px-5 py-3">
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
              <span className="text-xs md:text-sm font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase text-primary">
                99.9% Pormentes Pontosság
              </span>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[550px] lg:h-full lg:min-h-[600px] group">
            <Image
              src={STUDIO_IMG}
              alt="DTL Customs műhely"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
