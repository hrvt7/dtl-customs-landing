interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block mb-3 text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] font-medium tracking-[0.25em] uppercase text-primary-container">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase text-on-surface">
        {title}
      </h2>
      {subtitle && <p className="mt-3 md:mt-4 text-base md:text-lg text-outline max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
