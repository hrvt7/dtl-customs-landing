import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="szolgaltatasok" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Szolgáltatásaink"
          title="Amit Kínálunk"
          subtitle="Prémium fóliázási megoldások minden igényre — professzionális kivitelezéssel és garanciával."
        />
        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
