"use client";
import Image from "next/image";

interface CarPreviewProps {
  color: string;
  colorName: string;
  brandName: string;
}

export function CarPreview({ color, colorName, brandName }: CarPreviewProps) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black group">
      {/* Car photo */}
      <Image
        src="/hero/car-base.jpg"
        alt="Autó fólia előnézet"
        fill
        className="object-cover"
        quality={85}
      />

      {/* Color overlay — masked to car area only */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{
          backgroundColor: color,
          mixBlendMode: "color",
          opacity: 0.7,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
        }}
      />

      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Color info overlay */}
      <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] md:text-xs font-mono text-white/50 tracking-wider">
            {brandName}
          </div>
          <div className="text-white text-sm md:text-base font-semibold">
            {colorName}
          </div>
        </div>
        <div
          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white/30 transition-colors duration-700 shadow-lg"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
