export const BUSINESS = {
  name: "DTL Customs",
  tagline: "PPF & TINT",
  slogan: "Prémium Autófóliázás Szombathely",
  description:
    "Prémium autóüveg-fóliázással foglalkozunk, hogy autód védett és stílusos legyen. Teljes körű szolgáltatás: fény, hő és kavicsfelverődés ellen.",
  phone: "+36 30 389 9625",
  email: "dtlcustoms.info@gmail.com",
  address: "Körmendi út 45, Szombathely, 9700",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.0!2d16.6218!3d47.2306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEzJzUwLjIiTiAxNsKwMzcnMTguNSJF!5e0!3m2!1shu!2shu!4v1",
  facebook: "https://www.facebook.com/profile.php?id=61587179489147",
} as const;

export const NAV_LINKS = [
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Galéria", href: "#galeria" },
  { label: "Folyamat", href: "#folyamat" },
  { label: "Kapcsolat", href: "#kapcsolat" },
] as const;

export const SERVICES = [
  {
    id: "color-change",
    title: "Szín Csere Fóliázás",
    subtitle: "Color Change Wrap",
    description:
      "Teljes karosszéria fóliázás prémium minőségű vinyl fóliákkal. Matt, fényes, szatén, króm — bármilyen szín, amit elképzelsz.",
    icon: "palette",
    features: ["3M & Avery minőség", "200+ szín választék", "5 év garancia", "3-5 nap kivitelezés"],
  },
  {
    id: "ppf",
    title: "PPF Védőfólia",
    subtitle: "Paint Protection Film",
    description:
      "Láthatatlan, öntisztuló védőfólia amely megóvja az eredeti fényezést kavicsfelverődés, karcok és UV sugárzás ellen.",
    icon: "shield",
    features: ["Öntisztuló technológia", "Karcálló felület", "10 év garancia", "Eredeti fényezés védelem"],
  },
  {
    id: "tint",
    title: "Üvegfóliázás",
    subtitle: "Window Tint",
    description:
      "Professzionális ablak sötétítés és hővédelem. Csökkenti az UV sugárzást, a hőterhelést és növeli a magánéleted védelmét.",
    icon: "sun",
    features: ["99% UV szűrés", "Hővédelem", "Választható sötétség", "Buborékmentes telepítés"],
  },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Elégedett ügyfél" },
  { value: 8, suffix: "+", label: "Év tapasztalat" },
  { value: 200, suffix: "+", label: "Fólia szín" },
  { value: 100, suffix: "%", label: "Garancia" },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Konzultáció",
    description: "Részletes állapotfelmérés és esztétikai célok megbeszélése. Prémium anyagok kiválasztása swatchgyűjteményünkből.",
  },
  {
    step: 2,
    title: "Előkészítés",
    description: "Többlépcsős tisztítási folyamat. Minden szennyeződést eltávolítunk a molekuláris szintű tapadás biztosítása érdekében.",
  },
  {
    step: 3,
    title: "Telepítés",
    description: "Klímavezérelt műhelyben történő felhelyezés. Kézi vagy plotter vágású precíziós munka minősített szakemberektől.",
  },
  {
    step: 4,
    title: "Minőségellenőrzés",
    description: "Utókezelés utáni vizsgálat 5000K stúdió megvilágítás alatt. Végső detailing és hidrofób bevonat.",
  },
] as const;
