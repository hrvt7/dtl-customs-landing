"use client";
import { useEffect } from "react";

const NAV_LINKS = [
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Galéria", href: "#munkaink" },
  { label: "Felszerelés", href: "#szolgaltatasok" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-[#131313] flex flex-col items-center justify-center gap-8">
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white p-2"
        aria-label="Menü bezárása"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {NAV_LINKS.map((link) => (
        <a
          key={link.href + link.label}
          href={link.href}
          onClick={onClose}
          className="text-2xl font-bold uppercase text-white hover:text-accent-orange transition-colors"
        >
          {link.label}
        </a>
      ))}

      <a
        href="#ajanlatkeres"
        onClick={onClose}
        className="mt-4 bg-accent-orange text-white px-12 py-4 label-technical hover:opacity-90 transition-all"
      >
        Ajánlatot kérek
      </a>
    </div>
  );
}
