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
      from={{ opacity: 0, x: -40 }}
      to={{ opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }}
      delay={index * 0.15}
    >
      <div className="relative flex gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dtl-blue/10 border-2 border-dtl-blue flex items-center justify-center text-dtl-blue font-bold font-mono text-sm md:text-base flex-shrink-0 shadow-[0_0_20px_rgba(30,144,255,0.25)]">
            {step}
          </div>
          {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-dtl-blue/40 via-dtl-blue/15 to-transparent mt-2 shadow-[0_0_8px_rgba(30,144,255,0.15)]" />}
        </div>
        <div className={isLast ? "" : "pb-10 md:pb-12"}>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
