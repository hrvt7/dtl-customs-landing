import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GarageBackground } from "@/components/ui/GarageBackground";
import { ContactForm } from "./ContactForm";
import { BUSINESS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="kapcsolat" className="py-16 md:py-24 lg:py-32 garage-section">
      <GarageBackground darkness={0.7} parallaxSpeed={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Kapcsolat"
          title="Kérj Árajánlatot"
          subtitle="Írj nekünk vagy hívj — 24 órán belül válaszolunk."
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal from={{ opacity: 0, x: -40 }} to={{ opacity: 1, x: 0, duration: 0.8 }}>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal from={{ opacity: 0, x: 40 }} to={{ opacity: 1, x: 0, duration: 0.8 }} delay={0.2}>
            <div className="space-y-5 md:space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                <iframe
                  src={BUSINESS.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DTL Customs térkép"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <a href={`tel:${BUSINESS.phone}`} className="glass glass-hover rounded-xl p-3 md:p-4 flex items-center gap-3 transition-all">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-dtl-blue/10 flex items-center justify-center text-dtl-blue flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-mono">Telefon</div>
                    <div className="text-white text-xs md:text-sm font-semibold">{BUSINESS.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="glass glass-hover rounded-xl p-3 md:p-4 flex items-center gap-3 transition-all">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-dtl-blue/10 flex items-center justify-center text-dtl-blue flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-mono">Email</div>
                    <div className="text-white text-xs md:text-sm font-semibold">{BUSINESS.email}</div>
                  </div>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`}
                  target="_blank"
                  className="glass glass-hover rounded-xl p-3 md:p-4 flex items-center gap-3 transition-all sm:col-span-2"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-dtl-blue/10 flex items-center justify-center text-dtl-blue flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-mono">Cím</div>
                    <div className="text-white text-xs md:text-sm font-semibold">{BUSINESS.address}</div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
