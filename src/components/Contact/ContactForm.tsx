"use client";
import { useState } from "react";
import { GlowButton } from "@/components/ui/GlowButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-on-surface placeholder-outline/50 focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container/50 transition-colors";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 md:space-y-5"
    >
      {submitted ? (
        <div className="glass rounded-2xl p-6 md:p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-primary-container/20 border border-primary-container/40 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-on-surface mb-2">Köszönjük!</h3>
          <p className="text-outline text-sm md:text-base">Hamarosan felvesszük Önnel a kapcsolatot.</p>
        </div>
      ) : (
        <>
          <div>
            <label className="block text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] text-outline mb-1 md:mb-1.5 tracking-[0.2em] uppercase">
              Teljes Név
            </label>
            <input
              required
              type="text"
              className={inputClasses}
              placeholder="Kovács János"
            />
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] text-outline mb-1 md:mb-1.5 tracking-[0.2em] uppercase">
              Autó (év/márka/modell)
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="2023 BMW M4 Competition"
            />
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] text-outline mb-1 md:mb-1.5 tracking-[0.2em] uppercase">
              Szolgáltatás
            </label>
            <select
              className={`${inputClasses} appearance-none`}
              defaultValue=""
            >
              <option value="" disabled className="bg-surface-container">Válassz szolgáltatást...</option>
              <option value="ppf-full" className="bg-surface-container">Teljes Karosszéria PPF</option>
              <option value="color-change" className="bg-surface-container">Szín Csere Wrap</option>
              <option value="tint" className="bg-surface-container">Kerámia Üvegfólia</option>
              <option value="full-package" className="bg-surface-container">Teljes Csomag</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] text-outline mb-1 md:mb-1.5 tracking-[0.2em] uppercase">
              Üzenet
            </label>
            <textarea
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="Írd le milyen autód van és mire gondolsz..."
            />
          </div>
          <GlowButton type="submit" size="lg" className="w-full">
            Ajánlatot kérek
          </GlowButton>
        </>
      )}
    </form>
  );
}
