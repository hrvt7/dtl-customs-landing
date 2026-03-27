"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface GalleryCardProps {
  title: string;
  category: string;
  color: string;
  index: number;
}

export function GalleryCard({ title, category, color, index }: GalleryCardProps) {
  return (
    <ScrollReveal
      from={{ opacity: 0 }}
      to={{ opacity: 1, duration: 0.5, ease: "power2.out" }}
      delay={index * 0.08}
    >
      <div className="group relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/[0.04]">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${color}22, #080808 70%, ${color}0A)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
          <svg className="w-16 h-16 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dtl-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="text-[10px] md:text-xs font-mono text-dtl-warm tracking-wider">{category}</div>
          <div className="text-white text-sm md:text-base font-semibold">{title}</div>
        </div>
      </div>
    </ScrollReveal>
  );
}
