export interface WrapColor {
  name: string;
  hex: string;
  category: "solid" | "satin" | "matte" | "gloss" | "chrome" | "flip";
  brand: string;
}

export const WRAP_COLORS: WrapColor[] = [
  { name: "Fényes Fehér", hex: "#F5F5F5", category: "gloss", brand: "3M 2080" },
  { name: "Fényes Fekete", hex: "#1A1A1A", category: "gloss", brand: "3M 2080" },
  { name: "Fényes Piros", hex: "#CC0000", category: "gloss", brand: "3M 2080" },
  { name: "Fényes Kék", hex: "#0044CC", category: "gloss", brand: "3M 2080" },
  { name: "Fényes Narancssárga", hex: "#FF6600", category: "gloss", brand: "3M 2080" },
  { name: "Fényes Sárga", hex: "#FFD700", category: "gloss", brand: "3M 2080" },
  { name: "Szatén Fehér", hex: "#E8E8E8", category: "satin", brand: "3M 2080" },
  { name: "Szatén Fekete", hex: "#2A2A2A", category: "satin", brand: "3M 2080" },
  { name: "Szatén Battleship Szürke", hex: "#6B7B8D", category: "satin", brand: "3M 2080" },
  { name: "Szatén Key West", hex: "#00B4D8", category: "satin", brand: "3M 2080" },
  { name: "Szatén Ocean Shimmer", hex: "#006994", category: "satin", brand: "3M 2080" },
  { name: "Szatén Bitter Yellow", hex: "#C5A000", category: "satin", brand: "3M 2080" },
  { name: "Szatén Canyon Copper", hex: "#B87333", category: "satin", brand: "3M 2080" },
  { name: "Szatén Perfect Blue", hex: "#0055AA", category: "satin", brand: "3M 2080" },
  { name: "Szatén Smoldering Red", hex: "#8B0000", category: "satin", brand: "3M 2080" },
  { name: "Szatén Thundercloud", hex: "#4A5568", category: "satin", brand: "3M 2080" },
  { name: "Matt Fekete", hex: "#1C1C1C", category: "matte", brand: "3M 2080" },
  { name: "Matt Fehér", hex: "#D9D9D9", category: "matte", brand: "3M 2080" },
  { name: "Matt Kék", hex: "#1A3C6E", category: "matte", brand: "3M 2080" },
  { name: "Matt Zöld", hex: "#2D5A27", category: "matte", brand: "3M 2080" },
  { name: "Matt Szürke", hex: "#555555", category: "matte", brand: "3M 2080" },
  { name: "Matt Dark Grey", hex: "#3D3D3D", category: "matte", brand: "3M 2080" },
  { name: "Króm Ezüst", hex: "#C0C0C0", category: "chrome", brand: "Avery" },
  { name: "Króm Arany", hex: "#DAA520", category: "chrome", brand: "Avery" },
  { name: "Króm Kék", hex: "#4169E1", category: "chrome", brand: "Avery" },
  { name: "Króm Rózsa", hex: "#E8919A", category: "chrome", brand: "Avery" },
  { name: "Satin Flip Caramel Luster", hex: "#A0522D", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Volcanic Fire", hex: "#B22222", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Caribbean Shimmer", hex: "#20B2AA", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Ghost Pearl", hex: "#F0EAD6", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Glacial Frost", hex: "#A8C8E0", category: "flip", brand: "3M 2080" },
  { name: "Satin Flip Psychedelic", hex: "#9B30FF", category: "flip", brand: "3M 2080" },
];

export const COLOR_CATEGORIES = [
  { id: "all", label: "Összes" },
  { id: "gloss", label: "Fényes" },
  { id: "satin", label: "Szatén" },
  { id: "matte", label: "Matt" },
  { id: "chrome", label: "Króm" },
  { id: "flip", label: "Speciális" },
] as const;

export const HERO_MORPH_COLORS = [
  { name: "Satin Fekete", hex: "#1A1A1A" },
  { name: "Electric Blue", hex: "#1E90FF" },
  { name: "Volcanic Red", hex: "#CC0000" },
  { name: "Satin White", hex: "#E8E8E8" },
  { name: "Caribbean Shimmer", hex: "#20B2AA" },
  { name: "Chrome Gold", hex: "#DAA520" },
  { name: "Psychedelic Purple", hex: "#9B30FF" },
  { name: "Matte Military Green", hex: "#2D5A27" },
];
