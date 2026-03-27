"use client";

interface CarPreviewProps {
  color: string;
  colorName: string;
}

export function CarPreview({ color, colorName }: CarPreviewProps) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass">
      <svg viewBox="0 0 800 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bg-glow" cx="50%" cy="60%">
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="car-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="window" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A1628" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill="url(#bg-glow)" />
        <ellipse cx="400" cy="420" rx="320" ry="15" fill={color} opacity="0.1" />
        <path d="M140 320 L160 280 L240 250 L300 200 L380 180 L480 180 L560 200 L620 230 L660 260 L680 320 Z" fill="url(#car-gradient)" className="transition-all duration-700" />
        <path d="M300 200 L340 160 L500 155 L540 180 L480 180 L380 180 Z" fill="url(#car-gradient)" opacity="0.9" className="transition-all duration-700" />
        <path d="M310 198 L345 165 L420 160 L410 195 Z" fill="url(#window)" />
        <path d="M420 195 L425 160 L500 158 L530 185 Z" fill="url(#window)" />
        <circle cx="240" cy="330" r="42" fill="#111" />
        <circle cx="240" cy="330" r="30" fill="#222" />
        <circle cx="240" cy="330" r="12" fill="#333" />
        <circle cx="600" cy="330" r="42" fill="#111" />
        <circle cx="600" cy="330" r="30" fill="#222" />
        <circle cx="600" cy="330" r="12" fill="#333" />
        <ellipse cx="670" cy="280" rx="12" ry="8" fill="white" opacity="0.9" />
        <rect x="145" y="275" width="8" height="30" rx="4" fill="#CC0000" opacity="0.8" />
        <path d="M180 270 Q400 240 660 270" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" />
      </svg>

      <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] md:text-xs font-mono text-gray-500 tracking-wider">Kiválasztott szín</div>
          <div className="text-white text-sm md:text-base font-semibold">{colorName}</div>
        </div>
        <div
          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white/30 transition-colors duration-700"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
