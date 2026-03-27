"use client";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb955qfTqfCcT9Qip-KXF4912WhMUnVQiw3KcsC_-MPSI9c-TFZ6p6HMJOdZhSfFT7l6N20JoBJ4EoFOeFIibH54Gd0qGRIbACECK8qBGAhM2k7gqLI-R2EFoVPZN9-MYArlg6yTMUl1RAPDDQHTtrUvTq8NEKMAWdEAZ-AsNS1FjmkS_3gwqAZeNvpHo6J_sAb0s9PsE-GX4qJUMukYTM4BgUJZk6d1tL54YiCRq--cfuEDA8wELRpPxJ8mqJlfELXGzhSkPojVQf",
    alt: "Porsche GT3 RS",
    title: "Porsche GT3 RS",
    category: "PPF",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeNUKB_Dq_z4LUwP_qmueJNxa2ybdQBM-rG6XxUKG-oILTBwk3Pq0mqlIiQz7nNuLs5YSL-b6cxmhJOfteAPmwpVkC63PXrIFErnxpGztsZf09vLN6YPNhC5KkKvJ0VqT8LfF6V0WrPyb0KRc3L7qTe2JQzwC_a5NYc_4b8Re0mzPg5LV3ExoRhnEbZQ4byVWZHr9rSfWEDxC59HD7YYAKDOg-O75x2wmOALztlVA86spGZ9aDDpW5b52DC7a6fDyHb1SexNJuWpyE",
    alt: "BMW Szatén",
    title: "BMW Szatén Wrap",
    category: "Szín Csere",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu_4yS9UPYdsbZlvFgu71Ga9EaD6iEO4bT4EO4ZDJiKDaZ4E1LAx_4ElCzHJs3ykbAGd_NwUoXjqjhTXeM4BUdpKCOU-JdLViQVP3y66vJwfyWXlt8tg2g7GJpebx6vVwS_tr1HXfru15yKzd4HKx6doUX2xOvUzXNpr2vw7MlYxw4K5brrxF8d_Est-xlSQVmPv1d7GZ42ZSKR6H6jMoJqVyBNc31WTfbwq0Os9R8lXXRcbtBJIoHyqJX1uRNOpCl0an0lF2Xg3LZ",
    alt: "Ferrari részlet",
    title: "Ferrari Detailing",
    category: "PPF",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkcZYjJ-Tw8PQNK2TErqtlqgIXFPNC4CiuvWECWBhLV3pfADshr83ersQfQGlehhV_ql91haFfFn_Z1cG0yuqFwgq_W8wwAwg-ErGcpejW7l3WSxByfdbEZCt3Y8rmBTnnvHfGMjWikhuxIgBBt9W3UMONI1ZjZE-qH7a1y1Tsy0j99QMhspX6U4lUfF93qPGivViyWVnRld8whumnePMHxVkYz0-ffdgvldJXp2jXiMBGvcRt-r0RO9oQKplyBl75WaANzo6Evsqo",
    alt: "Tesla kék",
    title: "Tesla Blue Wrap",
    category: "Szín Csere",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxlbW0voRa-TjxOjhVMEmg3vji3mAztoHmTfgGEipyjQ9aCfySHt-IjqdzkwO5-jPAVgbMiF1czif8PYiy9-udsVWA-HeygwGccve4wttjhV6yeUwugyy7dK0mbV1IG0xOovSun4APkBC_ao_1dGbtXhgILdlxgHnRxVAHCR3GVpLHPTDsvwfSsz7ynYCPaWV5r--6nwmcwuZKyAppVJ3eS1do7eXCgryskfYZDwTr8JopVI5s8_FfFdVGtXLgq8ltyql8qEHCF4tT",
    alt: "Szuperautó hátulja",
    title: "Supercar Rear",
    category: "PPF",
    tall: false,
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-16 md:py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block mb-3 text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] font-medium tracking-[0.25em] uppercase text-primary-container">
            Galéria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase text-on-surface">
            Munkáink
          </h2>
        </div>

        {/* Masonry grid — 3 columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-surface-container"
            >
              <div className={`relative ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase text-primary-container">
                    {img.category}
                  </span>
                  <div className="text-white font-bold text-sm">{img.title}</div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden bg-primary-container p-6 md:p-8 flex flex-col justify-between aspect-[4/3]">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight uppercase text-white leading-tight">
                A Te Elképzelésed, A Mi Kivitelezésünk.
              </h3>
            </div>
            <a
              href="#kapcsolat"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-on-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary transition-colors self-start"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase text-xs">Projekt Indítás</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
