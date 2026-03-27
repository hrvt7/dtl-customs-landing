"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { GlowButton } from "@/components/ui/GlowButton";
import { MobileMenu } from "@/components/MobileMenu";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-3"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="DTL Customs"
              width={44}
              height={44}
              className="rounded-md"
            />
            <div className="hidden sm:block">
              <span className="text-base md:text-lg font-black tracking-tight text-on-surface uppercase group-hover:text-primary transition-colors">
                DTL Customs
              </span>
              <span className="block text-[10px] font-[family-name:var(--font-space-grotesk)] tracking-[0.25em] text-outline uppercase">
                PPF & TINT
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-outline hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary-container after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">
            <GlowButton href="#kapcsolat" size="sm" className="hidden md:inline-flex">
              Ajánlatot kérek
            </GlowButton>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menü megnyitása"
            >
              <span className="w-6 h-0.5 bg-on-surface rounded-full" />
              <span className="w-4 h-0.5 bg-primary-container rounded-full" />
              <span className="w-6 h-0.5 bg-on-surface rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
