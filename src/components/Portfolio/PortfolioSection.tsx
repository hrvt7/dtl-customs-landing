"use client";
import Image from "next/image";

const PORTFOLIO = [
  {
    title: "Üvegfóliázás — VW Golf 8",
    subtitle: "LLumar IR Series",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4rMTja3QoxnOFWXWXYBbMhMVXScpeD6_DRw5RMytUWyO0VIF4k2dXAuOyP9xEt91c_C4XFDNUXWSkwcHKibjaHK8vFoV5M70-zS17yUto1TYamjUjDHJhehZyorMREAyGvlY3CvDw0N78kbWw8Tdg0czBPLYbAk-drWm7xH5n0uJdHLNfBm7w96lze0fgkROCI6RNoyPU8iH1LRiwEReQ7FjOxKASmDcZTE3KaXFfX_akLa886l9Wbu6WuYUq6l6ROBx0jjXMw9ET",
  },
  {
    title: "PPF teljes front — BMW M3",
    subtitle: "XPEL Ultimate Plus",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByn9S8ZHMLXqeuVuXQXWwyxT0-SX1HwSJSUrl1gazp115H3REb4_XToT_k8maAJjN0oXy0NWOPcnDdodGWYUm5bCYpCLeD49eE5LJE8HC_HZUK6uFC6BkKi_E6vOhUrZpsLh_hxqkOqfRkPMy643LXb9rhOkhyxiX-msnLJ9ApvDvkhu3NSZAa5ZzbjvCAB9-mzqLfifBP9aKK8dtqZizMlpBIJrmXTe_Smdc6Abbt4u8CUtNle-YfTnUKja5cnW1zHHj0RUgenbfS",
  },
  {
    title: "Karosszériafólia — Audi A5",
    subtitle: "Avery Dennison Satin Black",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhyc8xXW09ixj5VETRSICdLToFbKlS3uogO6m1bYrZvK7z44GhSpNSyvMhwGUHouuQzwIK__56HaXi85NstUVIZGtINxYRlQrJKhZ4dNeYBemdV51LaOS-XDBE44hV19u9VTg-vlzTycbUn2jBqZxNluJ6viX9LKjl85ScQ4pgEpaLenXeUCDUhvh7dsL_QTu2PgEPzyYjXgPQ8WIlMIIWHC62XDCtkZMv035BcxE-qZ1buj9WTvWEFmU03rO3VQVLP8nScwMLj-GP",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-surface-container-low" id="munkaink">
      <div className="mb-16">
        <p className="label-technical text-accent-orange mb-4">Referenciák</p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-white font-[family-name:var(--font-dm-sans)]">
          Munkáink
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIO.map((item) => (
          <div key={item.title} className="bg-surface p-4 group">
            <div className="aspect-square mb-6 overflow-hidden relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized
              />
            </div>
            <h4 className="text-xl font-bold text-white uppercase mb-2 font-[family-name:var(--font-dm-sans)]">
              {item.title}
            </h4>
            <p className="label-technical text-white/50">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
