"use client";
import Image from "next/image";

interface CarPreviewProps {
  color: string;
  colorName: string;
  brandName: string;
  code: string;
}

/**
 * Converts a hex color to a hue-rotate + saturate + brightness filter
 * that transforms the RED Porsche to the target color.
 * Since the base car is RED (~0deg hue), we just rotate to the target hue.
 * The grey garage background is desaturated, so hue-rotate barely affects it.
 */
function colorToFilter(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2 / 255;
  const chroma = (max - min) / 255;

  // Very dark (black) → desaturate + darken
  if (lightness < 0.12) {
    return "saturate(0.2) brightness(0.3)";
  }
  // Very light (white) → desaturate + brighten
  if (lightness > 0.88) {
    return "saturate(0.15) brightness(1.6)";
  }
  // Low saturation (greys) → desaturate + adjust brightness
  if (chroma < 0.12) {
    return `saturate(0.15) brightness(${(lightness * 1.2 + 0.4).toFixed(2)})`;
  }

  // Calculate hue
  let hue = 0;
  if (max === r) hue = ((g - b) / (max - min)) * 60;
  else if (max === g) hue = (2 + (b - r) / (max - min)) * 60;
  else hue = (4 + (r - g) / (max - min)) * 60;
  if (hue < 0) hue += 360;

  const sat = Math.min(Math.max(chroma / (1 - Math.abs(2 * lightness - 1)) * 1.3, 0.4), 2.0);
  const bright = Math.min(Math.max(lightness * 1.3 + 0.3, 0.5), 1.4);

  return `hue-rotate(${Math.round(hue)}deg) saturate(${sat.toFixed(1)}) brightness(${bright.toFixed(2)})`;
}

export function CarPreview({ color, colorName, brandName, code }: CarPreviewProps) {
  const filter = colorToFilter(color);

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black">
      {/* Red Porsche — hue-rotate only changes the RED car, grey bg stays grey */}
      <Image
        src="/hero/car-red.jpg"
        alt="Autó fólia előnézet"
        fill
        className="object-cover transition-[filter] duration-500 ease-out"
        style={{ filter }}
        quality={85}
      />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Color info */}
      <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] md:text-xs font-mono text-white/50 tracking-wider">
            {brandName} · {code}
          </div>
          <div className="text-white text-sm md:text-base font-semibold">
            {colorName}
          </div>
        </div>
        <div
          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white/30 transition-colors duration-500 shadow-lg"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
