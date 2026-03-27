"use client";
import type { WrapColor } from "@/lib/colors";

interface ColorSwatchProps {
  color: WrapColor;
  isSelected: boolean;
  onClick: () => void;
}

export function ColorSwatch({ color, isSelected, onClick }: ColorSwatchProps) {
  const isLight = parseInt(color.hex.slice(1), 16) > 0xaaaaaa;

  return (
    <button
      onClick={onClick}
      className={`group relative w-full aspect-square rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg ${
        isSelected
          ? "ring-2 ring-dtl-blue ring-offset-2 ring-offset-dtl-navy scale-110 z-10 shadow-[0_0_20px_rgba(30,144,255,0.3)]"
          : ""
      }`}
      style={{ backgroundColor: color.hex }}
      title={color.name}
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 hidden md:block">
        <div className="bg-dtl-dark/95 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
          {color.name}
          <div className="text-gray-500">{color.brand}</div>
        </div>
        <div className="w-2 h-2 bg-dtl-dark/95 rotate-45 mx-auto -mt-1 border-r border-b border-white/10" />
      </div>

      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className={`w-4 h-4 md:w-5 md:h-5 ${isLight ? "text-black/60" : "text-white/80"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
      )}
    </button>
  );
}
