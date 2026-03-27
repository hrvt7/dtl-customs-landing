"use client";
import { useState } from "react";
import { WRAP_COLORS, COLOR_CATEGORIES, type WrapColor } from "@/lib/colors";
import { ColorSwatch } from "./ColorSwatch";
import { CarPreview } from "./CarPreview";

export function ColorGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<WrapColor>(WRAP_COLORS[3]);

  const filtered =
    activeCategory === "all"
      ? WRAP_COLORS
      : WRAP_COLORS.filter((c) => c.category === activeCategory);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
      {/* Car preview */}
      <div className="order-2 lg:order-1">
        <CarPreview
          color={selectedColor.hex}
          colorName={selectedColor.name}
          brandName={selectedColor.brand}
          code={selectedColor.code}
        />
        <p className="mt-3 text-center text-xs md:text-sm text-gray-500">
          Kattints egy színre a palettáról az előnézethez
        </p>
      </div>

      {/* Color palette */}
      <div className="order-1 lg:order-2">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
          {COLOR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-dtl-chrome text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Swatch grid */}
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 md:gap-2.5">
          {filtered.map((color) => (
            <ColorSwatch
              key={color.name}
              color={color}
              isSelected={selectedColor.name === color.name}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {/* Selected color info */}
        <div className="mt-5 md:mt-6 glass rounded-xl p-3 md:p-4 flex items-center gap-3 md:gap-4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex-shrink-0 transition-colors duration-500"
            style={{ backgroundColor: selectedColor.hex }}
          />
          <div>
            <div className="text-white text-sm md:text-base font-semibold">{selectedColor.name}</div>
            <div className="text-[10px] md:text-xs font-mono text-gray-500">
              {selectedColor.brand} · {selectedColor.code} · {selectedColor.hex} · {
                COLOR_CATEGORIES.find((c) => c.id === selectedColor.category)?.label
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
