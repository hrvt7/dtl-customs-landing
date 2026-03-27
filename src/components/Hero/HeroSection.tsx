"use client";

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD-9fFSoXBjvUs6PpUdImBajshsiR0cQ1q_Frax6GWMlqmx3kfzsoVYVhZu99LLZPa_EFQOs9hG8XE41DYhgFFkyIScyquH1xIUH-kOKRIVaQVnjm_8upD35KwueSvIk4Pe9Gly3PNS0EIfkrbc9l-0CqHHnD7BfWJa88EU_F_xgB6P4O8LEp3z7vw08eIogOex9zNhPw5n7VYuikNHXPsIXNSAoIOu2dSaSL6OHH8RmnxREwSbIZlVzZ7JSaFddC3H8fZI0Ju8uKzL";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-8 lg:px-24 overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="DTL Customs hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      {/* Top left metadata */}
      <div className="absolute top-32 left-8 lg:left-24 z-10">
        <p className="label-technical text-white/60 text-xs">DTL CUSTOMS &bull; EST. 2024</p>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <h1 className="text-[clamp(80px,12vw,160px)] font-bold tracking-tighter text-white uppercase leading-[0.8] mb-8 font-[family-name:var(--font-dm-sans)]">
          AUTÓ<br />FÓLIÁZÁS
        </h1>
        <p className="text-lg md:text-xl font-medium text-white/80 max-w-xl mb-12 leading-relaxed">
          Prémium autófóliázás Szombathelyen. PPF védőfólia, karosszériafóliázás, autóüveg fóliázás — professzionális kivitelezéssel.
        </p>
        <a
          href="#ajanlatkeres"
          className="inline-block bg-accent-orange text-white px-12 py-5 label-technical text-center hover:opacity-90 transition-all uppercase tracking-widest font-bold"
        >
          Ajánlatkérés
        </a>
      </div>

      {/* Bottom left */}
      <div className="absolute bottom-12 left-8 lg:left-24 z-10">
        <p className="label-technical text-white/60 flex items-center gap-2">
          <span className="text-accent-orange text-lg">&middot;</span> DTL CUSTOMS / PPF &amp; TINT &amp; WRAP
        </p>
      </div>

      {/* Bottom right */}
      <div className="absolute bottom-12 right-8 lg:right-24 z-10">
        <p className="label-technical text-white/60">Szombathely</p>
      </div>
    </section>
  );
}
