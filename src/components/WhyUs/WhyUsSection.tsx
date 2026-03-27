import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatCard } from "./StatCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATS } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <section id="miert-minket" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Miért minket?"
          title="Számok Beszélnek"
          subtitle="Évek tapasztalata és százak bizalma — ez a DTL Customs garancia."
        />
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 glass rounded-2xl p-3 md:p-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
