export interface WrapColor {
  name: string;
  hex: string;
  code: string;
  category: "gloss" | "satin" | "matte" | "chrome" | "flip" | "carbon";
  brand: "3M 2080" | "Avery Dennison" | "KPMF" | "Inozetek";
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

export interface HeroMorphColor {
  name: string;
  code: string;
  hex: string;
  brand: string;
}

export const HERO_MORPH_COLORS: HeroMorphColor[] = [
  { name: "Satin Black", code: "S12", hex: "#1A1A1A", brand: "3M 2080" },
  { name: "Satin Perfect Blue", code: "S344", hex: "#0055AA", brand: "3M 2080" },
  { name: "Gloss Cardinal Red", code: "SW900-436", hex: "#8B0000", brand: "Avery Dennison" },
  { name: "Satin White", code: "S10", hex: "#E8E8E8", brand: "3M 2080" },
  { name: "Matte Aurora Green", code: "K75463", hex: "#2D5A27", brand: "KPMF" },
  { name: "Satin Flip Volcanic Flare", code: "SP236", hex: "#B22222", brand: "3M 2080" },
  { name: "Satin Metallic Cool Grey", code: "SW900-802", hex: "#6B7B8D", brand: "Avery Dennison" },
  { name: "Gloss Hot Rod Red", code: "G13", hex: "#CC0000", brand: "3M 2080" },
];
