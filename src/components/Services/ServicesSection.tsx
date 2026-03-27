"use client";
import Image from "next/image";

const PPF_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAguI7r_9zmMMZOddW8a336NHqpZeM1NzuZu66xY0P2hxCEPn3lVF-n1XMWOLppkh5vAuOOlY4ux6qwR9hlPeTPjDOBJi6ggbdDT3a1T4g0MXhQftV6rzzoLblaaUY2OfichpTfudTsqMmWWd1jjdCTyKF8k5O8EyyffCAMFiHbzCppAlCYnviqXnKnWWGJgSGwjFqRv5szjZCywLGQXeTBLpSNhVwNm3ohSUJAIJeuUUY2ea9Fd3G4YAv8fDr_zeO1tHOO8fiApaxt";
const SZIN_CSERE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDk2thCKDZkquSR8IgNPfVelimgY9LB_HTAQdWAu13GVtCXDPwDwo3vCjmc2KFxK0WAphNICSeODfKmYcN-D0GG0AbivHx4KoFeOBhUPEEYawbiL79Q5GRDmKHHXEIW3n2F22nz0s6A-_Sq05kfofVFMOY4NJBRjuQjFYJCHVHO2dhOUOPSX6Gpv4psWAoXSgthbCtWdUWhGhHP56mkLDwESScSFcnzpFb7G-Y9vfwz_GGFsYNIWRyCFo3Pe8W7kL66NmSM3CwXGSev";
const PRECIZIÓS_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB7JCfgxgYuDlNuIuy4hMqZFWMlg5Z3JivQoPdtwV6Ytb60prmbz1jLgahoPZQvmQqo5coQux8j4owDnY59dqhByH7VLKqj32w1R2WIowguXsR2l-UmgvP_-JXVvawmP0nMCFOorj-cW7xPJh8CK7R_rRhvf1j-5LkotGeNXTwfWPkvPkYYoYJjII5-LtpldBNbz9EWsTnz9p7ISOHldDBkGsFgo7gJRe6sI2EXoh11vnfbykr-NiY7J03lYlJJuqePI7ZCMLTHtZCW";

export function ServicesSection() {
  return (
    <section id="szolgaltatasok" className="py-16 md:py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block mb-3 text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] font-medium tracking-[0.25em] uppercase text-primary-container">
            Szolgáltatásaink
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase text-on-surface">
            Amit Kínálunk
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Row 1 */}
          {/* PPF Card — col-span-7, tall */}
          <div className="md:col-span-7 relative group rounded-2xl overflow-hidden h-[350px] md:h-[700px] bg-surface-container">
            <Image
              src={PPF_IMG}
              alt="PPF Védőfólia"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 58vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary-container/20 border border-primary-container/40 text-primary text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase">
                  Öngyógyító
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase">
                  10 Év Garancia
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase text-white">
                PPF Védőfólia
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/70 max-w-md">
                Láthatatlan, öntisztuló védőfólia amely megóvja az eredeti fényezést kavicsfelverődés, karcok és UV sugárzás ellen.
              </p>
            </div>
          </div>

          {/* Right column — Szín Csere + stacked */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
            {/* Szín Csere Card */}
            <div className="relative group rounded-2xl overflow-hidden h-[280px] md:h-[340px] bg-surface-container">
              <Image
                src={SZIN_CSERE_IMG}
                alt="Szín Csere Fóliázás"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 42vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase text-white">
                  Szín Csere
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Teljes karosszéria fóliázás prémium vinyl fóliákkal. 200+ szín választék.
                </p>
              </div>
            </div>

            {/* Üvegfólia Card — no image, icon-based */}
            <div className="relative rounded-2xl overflow-hidden h-[280px] md:flex-1 bg-surface-container-high border border-white/5 p-5 md:p-6 flex flex-col justify-between">
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-container/15 border border-primary-container/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase text-on-surface">
                  Üvegfólia
                </h3>
                <p className="mt-2 text-sm text-outline">
                  Professzionális ablak sötétítés és hővédelem.
                </p>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="text-xs font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase text-primary">99% UV VÉDELEM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="text-xs font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase text-primary">HŐSZIGETELÉS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="text-xs font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase text-primary">BUBORÉKMENTES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          {/* Üvegfólia stats — col-span-4 (mobile hidden, shown as card above) */}
          <div className="hidden md:flex md:col-span-4 relative rounded-2xl overflow-hidden bg-surface-container-high border border-white/5 p-6 flex-col justify-center items-center text-center">
            <div className="text-6xl lg:text-7xl font-black text-primary-container tracking-tighter">500+</div>
            <div className="mt-2 text-sm font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase text-outline">
              Elégedett Ügyfél
            </div>
            <div className="mt-6 w-16 h-px bg-primary-container/30" />
            <div className="mt-6 text-5xl lg:text-6xl font-black text-secondary tracking-tighter">10+</div>
            <div className="mt-2 text-sm font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase text-outline">
              Év Garancia
            </div>
          </div>

          {/* Precíziós Kivitelezés — col-span-8, split layout */}
          <div className="md:col-span-8 relative group rounded-2xl overflow-hidden h-[300px] md:h-[340px] bg-surface-container">
            <div className="absolute inset-0 flex">
              {/* Text half */}
              <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center relative z-10">
                <span className="text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] tracking-[0.25em] uppercase text-primary-container mb-2">
                  Precíziós
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight uppercase text-on-surface">
                  Kivitelezés
                </h3>
                <p className="mt-2 text-sm text-outline max-w-xs">
                  Klímavezérelt műhelyben, minősített szakemberek által. Kézi vagy plotter vágású precíziós munka.
                </p>
                <a
                  href="#kapcsolat"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-container hover:text-primary transition-colors"
                >
                  Ajánlatot kérek
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              {/* Image half */}
              <div className="hidden md:block w-1/2 relative">
                <Image
                  src={PRECIZIÓS_IMG}
                  alt="Precíziós Kivitelezés"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                  unoptimized
                />
              </div>
            </div>
            {/* Mobile bg */}
            <div className="md:hidden absolute inset-0">
              <Image
                src={PRECIZIÓS_IMG}
                alt="Precíziós Kivitelezés"
                fill
                className="object-cover opacity-30"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
