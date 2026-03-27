export interface WrapColor {
  name: string;
  hex: string;
  code: string;
  category: "gloss" | "satin" | "matte" | "chrome" | "flip" | "carbon";
  brand: "3M 2080" | "Avery Dennison" | "KPMF" | "Inozetek";
  filter?: string;
}

/**
 * Convert a hex color to an approximate CSS filter string.
 * This shifts hue from the base red car image to the target color.
 * For colors where hue-rotation doesn't work well (black, white, grey),
 * we use brightness/saturation instead.
 */
export function hexToCarFilter(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2 / 255;
  const chroma = (max - min) / 255;

  // Very dark colors -> reduce brightness
  if (lightness < 0.15) {
    return `brightness(${(0.2 + lightness).toFixed(2)}) saturate(${(chroma * 2).toFixed(1)})`;
  }

  // Very light colors -> increase brightness, desaturate
  if (lightness > 0.85) {
    return `brightness(${(1.2 + lightness * 0.5).toFixed(2)}) saturate(${(chroma * 0.5).toFixed(1)})`;
  }

  // Low saturation (greys) -> desaturate + adjust brightness
  if (chroma < 0.15) {
    return `brightness(${(lightness * 1.4 + 0.3).toFixed(2)}) saturate(0.15)`;
  }

  // Calculate hue
  let hue = 0;
  if (max === r) {
    hue = ((g - b) / (max - min)) * 60;
  } else if (max === g) {
    hue = (2 + (b - r) / (max - min)) * 60;
  } else {
    hue = (4 + (r - g) / (max - min)) * 60;
  }
  if (hue < 0) hue += 360;

  // Base car is red (~0deg), so hue-rotate = target hue
  const saturation = chroma / (1 - Math.abs(2 * lightness - 1));
  const sat = Math.min(Math.max(saturation * 1.5, 0.3), 2.0);
  const bright = Math.min(Math.max(lightness * 1.5 + 0.3, 0.4), 1.5);

  return `hue-rotate(${Math.round(hue)}deg) saturate(${sat.toFixed(1)}) brightness(${bright.toFixed(2)})`;
}

export const WRAP_COLORS: WrapColor[] = [
  // 3M 2080 Gloss
  { name: "Gloss Black", hex: "#0A0A0A", code: "G12", category: "gloss", brand: "3M 2080" },
  { name: "Gloss White", hex: "#F2F2F2", code: "G10", category: "gloss", brand: "3M 2080" },
  { name: "Gloss Hot Rod Red", hex: "#CC0000", code: "G13", category: "gloss", brand: "3M 2080" },
  { name: "Gloss Burnt Orange", hex: "#CC5500", code: "G14", category: "gloss", brand: "3M 2080" },
  { name: "Gloss Deep Blue Metallic", hex: "#003366", code: "G217", category: "gloss", brand: "3M 2080" },
  { name: "Gloss Green Envy", hex: "#006633", code: "G336", category: "gloss", brand: "3M 2080" },

  // 3M 2080 Satin
  { name: "Satin Black", hex: "#1A1A1A", code: "S12", category: "satin", brand: "3M 2080" },
  { name: "Satin White", hex: "#E8E8E8", code: "S10", category: "satin", brand: "3M 2080" },
  { name: "Satin Perfect Blue", hex: "#0055AA", code: "S344", category: "satin", brand: "3M 2080" },
  { name: "Satin Key West", hex: "#00B4D8", code: "S57", category: "satin", brand: "3M 2080" },
  { name: "Satin Ocean Shimmer", hex: "#006994", code: "S327", category: "satin", brand: "3M 2080" },
  { name: "Satin Battleship Gray", hex: "#6B7B8D", code: "S51", category: "satin", brand: "3M 2080" },
  { name: "Satin Thundercloud", hex: "#4A5568", code: "S201", category: "satin", brand: "3M 2080" },
  { name: "Satin Bitter Yellow", hex: "#C5A000", code: "S335", category: "satin", brand: "3M 2080" },
  { name: "Satin Canyon Copper", hex: "#B87333", code: "S344", category: "satin", brand: "3M 2080" },
  { name: "Satin Smoldering Red", hex: "#8B1A1A", code: "S363", category: "satin", brand: "3M 2080" },

  // 3M 2080 Matte
  { name: "Matte Black", hex: "#1C1C1C", code: "M12", category: "matte", brand: "3M 2080" },
  { name: "Matte White", hex: "#D9D9D9", code: "M10", category: "matte", brand: "3M 2080" },
  { name: "Matte Slate Blue Metallic", hex: "#1A3C6E", code: "M217", category: "matte", brand: "3M 2080" },
  { name: "Matte Military Green", hex: "#2D5A27", code: "M26", category: "matte", brand: "3M 2080" },
  { name: "Matte Dark Gray", hex: "#3D3D3D", code: "M261", category: "matte", brand: "3M 2080" },
  { name: "Matte Charcoal Metallic", hex: "#555555", code: "M211", category: "matte", brand: "3M 2080" },

  // 3M 2080 Flip / Special
  { name: "Satin Flip Volcanic Flare", hex: "#B22222", code: "SP236", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Ghost Pearl", hex: "#F0EAD6", code: "SP280", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Caribbean Shimmer", hex: "#20B2AA", code: "SP276", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Glacial Frost", hex: "#A8C8E0", code: "SP277", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Psychedelic", hex: "#9B30FF", code: "SP281", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Caramel Luster", hex: "#A0522D", code: "SP59", category: "flip", brand: "3M 2080" },

  // Avery Dennison Supreme Wrapping Film
  { name: "Gloss Cardinal Red", hex: "#8B0000", code: "SW900-436", category: "gloss", brand: "Avery Dennison" },
  { name: "Gloss Black", hex: "#080808", code: "SW900-190", category: "gloss", brand: "Avery Dennison" },
  { name: "Satin Metallic Cool Grey", hex: "#6B7B8D", code: "SW900-802", category: "satin", brand: "Avery Dennison" },
  { name: "Matte Metallic Charcoal", hex: "#3A3A3A", code: "SW900-845", category: "matte", brand: "Avery Dennison" },
  { name: "Gloss Diamond White", hex: "#FAFAFA", code: "SW900-101", category: "gloss", brand: "Avery Dennison" },

  // KPMF K75400 Series
  { name: "Matte Aurora Green", hex: "#2D5A27", code: "K75463", category: "matte", brand: "KPMF" },
  { name: "Gloss Midnight Blue", hex: "#191970", code: "K75464", category: "gloss", brand: "KPMF" },
  { name: "Matte Iced Blue Titanium", hex: "#5A7D9A", code: "K75465", category: "matte", brand: "KPMF" },

  // Inozetek
  { name: "Super Gloss Midnight Purple", hex: "#2E0854", code: "MSG010", category: "gloss", brand: "Inozetek" },
  { name: "Super Gloss Racing Red", hex: "#D10000", code: "MSG005", category: "gloss", brand: "Inozetek" },
];

export const COLOR_CATEGORIES = [
  { id: "all", label: "Összes" },
  { id: "gloss", label: "Fényes" },
  { id: "satin", label: "Szatén" },
  { id: "matte", label: "Matt" },
  { id: "chrome", label: "Króm" },
  { id: "flip", label: "Speciális" },
  { id: "carbon", label: "Karbon" },
] as const;

