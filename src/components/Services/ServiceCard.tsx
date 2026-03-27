"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: readonly string[];
  index: number;
}

const ICONS: Record<string, React.ReactNode> = {
  palette: (
    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.55-.2-1.05-.54-1.46-.34-.4-.54-.9-.54-1.46 0-1.1.9-2 2-2h2.4c3.09 0 5.6-2.51 5.6-5.6C23 5.41 18.03 2 12 2z" />
      <circle cx="8" cy="10" r="1.5" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeWidth={1.5} d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
      <path strokeLinecap="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
    </svg>
  ),
  sun: (
    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
};

export function ServiceCard({ title, subtitle, description, icon, features, index }: ServiceCardProps) {
  return (
    <ScrollReveal
      from={{ opacity: 0, y: 60, scale: 0.95 }}
      to={{ opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }}
      delay={index * 0.15}
    >
      <div className="group relative glass glass-hover rounded-2xl p-6 md:p-8 h-full transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 left-6 right-6 md:left-8 md:right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dtl-chrome mb-5 md:mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
          {ICONS[icon]}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
        <span className="text-[10px] md:text-xs font-mono text-dtl-warm tracking-wider">{subtitle}</span>

        <p className="mt-3 md:mt-4 text-gray-400 leading-relaxed text-sm">{description}</p>

        <ul className="mt-5 md:mt-6 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-dtl-chrome flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
