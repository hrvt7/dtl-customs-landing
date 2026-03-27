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
    id: "ppf",
    title: "PPF Védőfólia",
    subtitle: "Paint Protection Film",
    description:
      "Kőfelverődés elleni karosszéria-védőfólia. XPEL Ultimate Plus, STEK DYNOshield — 150 mikronos, öngyógyító technológia. A gyári lakkfelület sértetlen marad.",
    icon: "shield",
    features: ["XPEL Ultimate Plus", "STEK DYNOshield", "Öngyógyító felület", "10 év garancia"],
  },
  {
    id: "color-change",
    title: "Karosszériafóliázás",
    subtitle: "Car Wrap",
    description:
      "Teljes vagy részleges karosszéria fóliázás 3M 2080, Avery Dennison Supreme Wrapping és KPMF fóliákkal. Matt, szatén, fényes és speciális textúrák. A fólia védi a gyári fényezést és bármikor eltávolítható.",
    icon: "palette",
    features: ["3M 2080 Series", "Avery Dennison", "KPMF & Inozetek", "Bármikor eltávolítható"],
  },
  {
    id: "tint",
    title: "Autóüveg Fóliázás",
    subtitle: "Window Tint",
    description:
      "Hő- és fényvédő fóliák felhelyezése LLumar és 3M Ceramic IR fóliákkal. 99% UV-védelem, akár 60%-os hőcsökkentés. Nem zavarja a GPS és mobiljeleket.",
    icon: "sun",
    features: ["LLumar ATR", "3M Ceramic IR", "99% UV-védelem", "Élettartam garancia"],
  },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Elvégzett munka" },
  { value: 5, suffix: "+", label: "Év tapasztalat" },
  { value: 10, suffix: " év", label: "Garancia PPF-re" },
  { value: 100, suffix: "%", label: "Elégedettség" },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Egyeztetés",
    description: "Felmérjük az autó állapotát, megbeszéljük az igényeket és kiválasztjuk a megfelelő fóliát vagy bevonatot.",
  },
  {
    step: 2,
    title: "Előkészítés",
    description: "Az autó alapos mosása és zsírtalanítása. A felület tökéletes tisztasága a tartós tapadás alapja.",
  },
  {
    step: 3,
    title: "Felhelyezés",
    description: "A fólia kézi szabása és felhelyezése zárt, pormentes műhelyben. Minden élt és sarkot precízen illesztünk.",
  },
  {
    step: 4,
    title: "Átadás",
    description: "Végső ellenőrzés, ápolási útmutató átadása és garanciajegy kiállítása.",
  },
] as const;
