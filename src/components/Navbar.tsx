"use client";
import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/MobileMenu";

const NAV_LINKS = [
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Galéria", href: "#munkaink" },
  { label: "Felszerelés", href: "#szolgaltatasok" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-3" : "bg-[#131313]/90 backdrop-blur-md py-6"
        }`}
      >
        <div className="max-w-none mx-auto px-8 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white uppercase font-[family-name:var(--font-dm-sans)]">
            DTL CUSTOMS
          </a>

          <div className="hidden md:flex gap-12 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="label-technical text-white/90 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ajanlatkeres"
              className="bg-accent-orange text-white px-8 py-3 label-technical hover:opacity-90 transition-all active:scale-[0.98]"
            >
              Ajánlatot kérek
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Menü megnyitása"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
