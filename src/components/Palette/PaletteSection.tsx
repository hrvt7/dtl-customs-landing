import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GarageBackground } from "@/components/ui/GarageBackground";
import { ColorGrid } from "./ColorGrid";

export function PaletteSection() {
  return (
    <section id="paletta" className="py-16 md:py-24 lg:py-32 garage-section">
      <GarageBackground darkness={0.7} parallaxSpeed={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Fólia Paletta"
          title="200+ Szín Választék"
          subtitle="3M, Avery és prémium márkák teljes palettája. Válaszd ki álmaid színét."
        />
        <ScrollReveal>
          <ColorGrid />
        </ScrollReveal>
      </div>
    </section>
  );
}
