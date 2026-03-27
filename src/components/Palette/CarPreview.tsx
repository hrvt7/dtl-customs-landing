"use client";
import Image from "next/image";

interface CarPreviewProps {
  color: string;
  colorName: string;
  brandName: string;
  filter?: string;
}

export function CarPreview({ color, colorName, brandName, filter }: CarPreviewProps) {
  // If no filter provided, generate a basic one from color overlay
  const imageFilter = filter || "hue-rotate(0deg)";

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black group">
      {/* Car photo with filter-based color change */}
      <Image
        src="/hero/car-base.jpg"
        alt="Auto folia elonezet"
        fill
        className="object-cover transition-[filter] duration-700 ease-out"
        style={{ filter: imageFilter }}
        quality={85}
      />

      {/* Subtle bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

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
        <div className="relative">
          <div
            className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white/30 transition-colors duration-700 shadow-lg"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute inset-0 rounded-full blur-md transition-colors duration-700 opacity-40"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}
