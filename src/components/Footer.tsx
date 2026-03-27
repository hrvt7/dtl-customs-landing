import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { GarageBackground } from "@/components/ui/GarageBackground";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 md:py-12 garage-section">
      <GarageBackground darkness={0.75} parallaxSpeed={15} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dtl-blue to-dtl-accent flex items-center justify-center font-bold text-white text-xs">
                DTL
              </div>
              <span className="font-bold text-white">DTL Customs</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Prémium autófóliázás Szombathelyen. Szín csere, PPF védőfólia, üvegfóliázás.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 md:mb-4">Navigáció</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 md:mb-4">Elérhetőség</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>{BUSINESS.address}</div>
              <a href={`tel:${BUSINESS.phone}`} className="block hover:text-white transition-colors">{BUSINESS.phone}</a>
              <a href={`mailto:${BUSINESS.email}`} className="block hover:text-white transition-colors">{BUSINESS.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[10px] md:text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} DTL Customs. Minden jog fenntartva.
          </span>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            className="text-gray-500 hover:text-dtl-blue transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
