"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast: boolean;
  index: number;
}

export function ProcessStep({ step, title, description, isLast, index }: ProcessStepProps) {
  return (
    <ScrollReveal
      from={{ opacity: 0, y: 15 }}
      to={{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }}
      delay={index * 0.1}
    >
      <div className="relative flex gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border-2 border-dtl-chrome flex items-center justify-center text-dtl-chrome font-bold font-mono text-sm md:text-base flex-shrink-0 shadow-[0_0_20px_rgba(192,192,192,0.15)]">
            {step}
          </div>
          {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-dtl-chrome/30 via-dtl-chrome/10 to-transparent mt-2 shadow-[0_0_8px_rgba(192,192,192,0.1)]" />}
        </div>
        <div className={isLast ? "" : "pb-10 md:pb-12"}>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
