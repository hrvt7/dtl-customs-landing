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
        <span className="inline-block mb-3 text-xs md:text-sm font-mono font-semibold tracking-[0.2em] uppercase text-dtl-warm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-white via-dtl-chrome-light to-dtl-chrome bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
