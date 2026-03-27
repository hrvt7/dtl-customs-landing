const BRANDS = ["XPEL", "STEK", "3M", "Avery Dennison", "LLumar", "Ceramic Pro", "Gtechniq"];

export function BrandsTicker() {
  return (
    <section className="bg-surface-container-low py-8 border-y border-outline-variant/10">
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 px-8 opacity-40 hover:opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {BRANDS.map((brand) => (
          <span key={brand} className="label-technical text-lg text-white">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
