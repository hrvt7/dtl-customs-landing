import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ColorGrid } from "./ColorGrid";

export function PaletteSection() {
  return (
    <section id="paletta" className="py-16 md:py-24 lg:py-32 bg-surface">
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
