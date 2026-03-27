"use client";
import { useState } from "react";
import { GlowButton } from "@/components/ui/GlowButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
          <div className="text-4xl mb-4">✓</div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">Köszönjük!</h3>
          <p className="text-gray-400 text-sm md:text-base">Hamarosan felvesszük Önnel a kapcsolatot.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-[10px] md:text-xs font-mono text-gray-500 mb-1 md:mb-1.5 tracking-wider">NÉV</label>
              <input
                required
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-dtl-blue focus:outline-none focus:ring-1 focus:ring-dtl-blue/50 transition-colors"
                placeholder="Kovács János"
              />
            </div>
            <div>
              <label className="block text-[10px] md:text-xs font-mono text-gray-500 mb-1 md:mb-1.5 tracking-wider">TELEFON</label>
              <input
                type="tel"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-dtl-blue focus:outline-none focus:ring-1 focus:ring-dtl-blue/50 transition-colors"
                placeholder="+36 30 123 4567"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-mono text-gray-500 mb-1 md:mb-1.5 tracking-wider">EMAIL</label>
            <input
              required
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-dtl-blue focus:outline-none focus:ring-1 focus:ring-dtl-blue/50 transition-colors"
              placeholder="pelda@email.com"
            />
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-mono text-gray-500 mb-1 md:mb-1.5 tracking-wider">SZOLGÁLTATÁS</label>
            <select
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-white focus:border-dtl-blue focus:outline-none focus:ring-1 focus:ring-dtl-blue/50 transition-colors appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="bg-dtl-dark">Válassz szolgáltatást...</option>
              <option value="color-change" className="bg-dtl-dark">Szín Csere Fóliázás</option>
              <option value="ppf" className="bg-dtl-dark">PPF Védőfólia</option>
              <option value="tint" className="bg-dtl-dark">Üvegfóliázás</option>
              <option value="other" className="bg-dtl-dark">Egyéb</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-mono text-gray-500 mb-1 md:mb-1.5 tracking-wider">ÜZENET</label>
            <textarea
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-gray-600 focus:border-dtl-blue focus:outline-none focus:ring-1 focus:ring-dtl-blue/50 transition-colors resize-none"
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
