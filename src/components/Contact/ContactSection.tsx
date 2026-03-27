"use client";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { BUSINESS } from "@/lib/constants";

const CONTACT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAdFNgtlJaIGgWjbTT6kBOmijRhSqCNxmpXox5Ao2FYLfuvOPKyBooS1ZtAt-DGmjvX20OS0GAGBVUrXXMMlB2ggylc2AI1ja8DpUrAcyOaWvP6k8yYJP4paHYBvWFnojU1BAQCzPndMI0LN3Qy4rgPg52UGu7hSu1PJKgNFYiVz8mVpCRAqcIgEwqb-l7v8l8uz7f_ZOpEEacJxh6lVNkM5ywtf7SNhruY9S83HunszpNGbTJvR4YW2rUalHNjoOjzZB-0xF_yryq6";

export function ContactSection() {
  return (
    <section id="kapcsolat" className="py-16 md:py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block mb-3 text-[10px] md:text-xs font-[family-name:var(--font-space-grotesk)] font-medium tracking-[0.25em] uppercase text-primary-container">
            Kapcsolat
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase text-on-surface">
            Kérj Árajánlatot
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-outline max-w-2xl mx-auto">
            Írj nekünk vagy hívj — 24 órán belül válaszolunk.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left — Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right — Image + Contact info */}
          <div className="space-y-5 md:space-y-6">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-[280px] md:h-[320px] group">
              <Image
                src={CONTACT_IMG}
                alt="DTL Customs műhely"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <a href={`tel:${BUSINESS.phone}`} className="glass glass-hover rounded-xl p-3 md:p-4 flex items-center gap-3 transition-all">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-outline font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase">Telefon</div>
                  <div className="text-on-surface text-xs md:text-sm font-semibold">{BUSINESS.phone}</div>
                </div>
              </a>

              <a href={`mailto:${BUSINESS.email}`} className="glass glass-hover rounded-xl p-3 md:p-4 flex items-center gap-3 transition-all">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-outline font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase">Email</div>
                  <div className="text-on-surface text-xs md:text-sm font-semibold">{BUSINESS.email}</div>
                </div>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`}
                target="_blank"
                className="glass glass-hover rounded-xl p-3 md:p-4 flex items-center gap-3 transition-all sm:col-span-2"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-outline font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase">Cím</div>
                  <div className="text-on-surface text-xs md:text-sm font-semibold">{BUSINESS.address}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
