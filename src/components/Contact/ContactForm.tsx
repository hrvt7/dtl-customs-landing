"use client";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    "w-full bg-[#131313] border-none p-4 label-technical text-white focus:ring-2 focus:ring-accent-orange focus:outline-none";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-bold text-white mb-2">Köszönjük!</h3>
        <p className="text-white/60 text-sm">Hamarosan felvesszük Önnel a kapcsolatot.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <input required type="text" className={inputClasses} placeholder="NÉV" />
      <input required type="email" className={inputClasses} placeholder="EMAIL" />
      <textarea className={inputClasses} placeholder="ÜZENET / AUTÓ TÍPUSA" rows={4} />
      <button
        type="submit"
        className="w-full gradient-button text-white py-5 label-technical uppercase font-bold tracking-widest hover:opacity-90 transition-all"
      >
        Ajánlatot kérek
      </button>
    </form>
  );
}
