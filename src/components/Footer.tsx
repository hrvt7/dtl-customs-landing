import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 md:py-10 bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="font-black tracking-tight text-on-surface uppercase text-lg">
            DTL CUSTOMS
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-outline hover:text-primary-container transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[10px] md:text-xs text-outline/60 font-[family-name:var(--font-space-grotesk)]">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. Minden jog fenntartva.
          </div>
        </div>
      </div>
    </footer>
  );
}
