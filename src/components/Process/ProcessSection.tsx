import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProcessStep } from "./ProcessStep";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section id="folyamat" className="py-16 md:py-24 lg:py-32 relative section-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Hogyan működik?"
          title="A Folyamat"
          subtitle="Egyszerű és átlátható — a konzultációtól az átadásig."
        />
        <div>
          {PROCESS_STEPS.map((ps, i) => (
            <ProcessStep key={ps.step} {...ps} isLast={i === PROCESS_STEPS.length - 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
