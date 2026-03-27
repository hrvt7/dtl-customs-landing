import { SectionTitle } from "@/components/ui/SectionTitle";
import { GalleryCard } from "./GalleryCard";

const PROJECTS = [
  { title: "BMW M4 Szatén Fekete", category: "Color Change", color: "#1A1A1A" },
  { title: "Mercedes AMG PPF Védelem", category: "PPF", color: "#C0C0C0" },
  { title: "Audi RS6 Electric Blue", category: "Color Change", color: "#1E90FF" },
  { title: "Porsche 911 Üvegtint", category: "Window Tint", color: "#4A5568" },
  { title: "Tesla Model 3 Matt Zöld", category: "Color Change", color: "#2D5A27" },
  { title: "VW Golf R Chrome Delete", category: "Color Change", color: "#1C1C1C" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-16 md:py-24 lg:py-32 relative section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Galéria"
          title="Munkáink"
          subtitle="Válogatás legutóbbi projektjeinkből. Hamarosan valódi fotókkal bővül!"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <GalleryCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
