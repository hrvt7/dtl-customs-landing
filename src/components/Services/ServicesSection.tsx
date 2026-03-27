"use client";
import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Autóüveg fóliázás",
    description:
      'Hő- és fényvédő fóliák a legmagasabb kategóriából: <span class="text-white">LLumar, 3M Ceramic IR, SunTek CarbonXP.</span> 99% UV-védelem és akár 60%-os hőcsökkentés a komfortosabb utazásért. No GPS interference technológia.',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApbfmVd0e1QJ58qX1bGwE6Q78nIptgqdo9sy3qjpXbuSAk9PWqdAaxX2KF4SyNjpD4fgCpXL7Ot2OdpC3dMERRI3EyfJWVI0gEurhmqbobQh0nc706EfZ1o3fCZVRYM0ErVWNa3_ydthTaT-9IyvnI-t-qnhOo-IqG60N1XjMwzB4-dx-e76oSVvSJT04X_14BDrmAChUHlfnLNFNIaVxntUZycweAk9S_5A1AiFvy8beFWFoagmACHYqbhyOvJa355FRPV--JfAil",
  },
  {
    num: "02",
    title: "PPF — Védőfólia",
    description:
      'Láthatatlan pajzs a kőfelverődés ellen. <span class="text-white">XPEL Ultimate Plus és STEK DYNOshield</span> fóliák. 150 mikronos vastagság, öngyógyító technológia és 10 év gyári garancia a makulátlan fényezésért.',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAR2MOHFlGYt5Wxh1Nq0DUz2qFQhIGu1hSdyPLeA4LlnxOPi56KY73Qn1N_zYXwk_OXaMk5vNaRV3RRDcMUhy_bbabhZcnRMYwaJ37sriSe-ZySZ9FnhTI_Jh55AudzDDuvCIGndVERzQUkUIOy-U12-8FX139kbAKuS61WlflwKcjsQRHKJIMynMVSdRC7wjUJdrBCNv9TRBuWmacvQjM_r-EFGEQ0FDDhkQpgeW4jul4j5HLE67D8cM_WNxTaqZYarK8pm88QNew",
  },
  {
    num: "03",
    title: "Karosszériafóliázás",
    description:
      'Egyedi megjelenés prémium minőségben. <span class="text-white">3M, Avery Dennison, KPMF</span> fóliák hatalmas színválasztékban: matt, szatén, fényes és egyedi textúrák. Bármikor nyom nélkül eltávolítható.',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6heCepgA4V6nbc0eKu3PVL1YKKlTyLuMXRTefWsRH3Jpcs_TDv2e7dEYppmF1KCzXaPJbqUYKqJ6gs2CKMuTs1bS8mXm_UVa11gAeiNsiUXqqRaLW7Gjzn3Og04ombnfD9eyOwNaEW6hOE5ZVFH_y40zTQloJZKrqAAsZ8uWQsqFQsbztSWfnZb3CAI_Rsb7iYac7otz7qvuzKmna0Qs21VNqfi8USyrCCdMvfbt5ZCj_jb-CpPbtXRJ6lYRQMvdguxKJVhq9Ragl",
  },
  {
    num: "04",
    title: "Kerámia bevonat",
    description:
      'Hosszú távú védelem és mély fény. <span class="text-white">Ceramic Pro 9H és Gtechniq Crystal Serum</span> technológiák. Vegyszerálló, hidrofób réteg, amely megkönnyíti a tisztítást. 2-5 év tartósság.',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5AGSxTPvpK4anqUxvCJWPeupkPTGGeg4KVutoGL2wp9EryBatsuPa3j9luJuB7oM8a8H9pkTvq6J633p1eMLojmVxxn2vNATZ_eYLdOcjKZQnn7vxtvyIdZD-XL2fTXqzZWzaZJh2sYaDzF8VBI86iHL9GXLrMMyBsVOQrrx3dTEBhPqz6YQmJQbtry8BJDw6HtW3HNfdm1NKs4QLncSI5qp-vZxET1WEuU1lcgdWsQfryp8jgmtJExk7_y5qCS8vClxGLYpvV86_",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-surface" id="szolgaltatasok">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div className="max-w-2xl">
          <p className="label-technical text-accent-orange mb-4">Szakértelem és Precizitás</p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            Szolgáltatásaink
          </h2>
        </div>
        <div className="hidden md:block h-[2px] bg-accent-orange w-32 mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {SERVICES.map((service) => (
          <div key={service.num} className="group">
            <div className="aspect-video mb-8 overflow-hidden relative">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-white font-[family-name:var(--font-dm-sans)]">
                {service.title}
              </h3>
              <span className="text-accent-orange text-3xl md:text-4xl font-bold">{service.num}</span>
            </div>
            <p
              className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
            <div className="flex gap-2">
              <div className="h-1 w-12 bg-accent-orange" />
              <div className="h-1 w-4 bg-surface-container-high" />
              <div className="h-1 w-4 bg-surface-container-high" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
