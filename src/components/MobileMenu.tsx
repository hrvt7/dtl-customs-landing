"use client";
import { useEffect } from "react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { GlowButton } from "@/components/ui/GlowButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-surface/95 backdrop-blur-2xl" />
      <div className="relative h-full flex flex-col items-center justify-center gap-6 sm:gap-8 p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-on-surface"
          aria-label="Menü bezárása"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-xl sm:text-2xl font-black uppercase tracking-tight text-on-surface hover:text-primary-container transition-colors"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.label}
          </a>
        ))}

        <GlowButton href="#kapcsolat" size="lg" onClick={onClose} className="mt-4">
          Ajánlatot kérek
        </GlowButton>

        <a href={`tel:${BUSINESS.phone}`} className="text-outline font-[family-name:var(--font-space-grotesk)] text-sm mt-4">
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
