"use client";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBp61x1dfD1azhUs8nAgc0gIva32JNlvUCPSE_j-HVoekw2NaHg4PFd9oiCWOP_tWLSVV6B2f9agijK4AgA0mAFTV5nVk6P2udUZSAqdusaPuJyAIylsUdiMumyRHrYR6wY4fXkwvqNPwwDlv61bJpZCmbuH4_XcMun5yucv6TGr1jAKDdFQEwNTG-eRkHBvuhowYv9CRp1uO41gMBjOvBO8AEy5F1K8hgRnTEjQL8JTRnwO2gV-k4_MNdNT7PyYAP_RomRQybX7kXT";

export function ContactSection() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-surface" id="kapcsolat">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <p className="label-technical text-accent-orange mb-4">Elérhetőség</p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-12 font-[family-name:var(--font-dm-sans)]">
            Kapcsolat
          </h2>

          <div className="space-y-8 mb-16">
            <div className="flex items-start gap-6">
              <svg className="w-7 h-7 text-accent-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="label-technical text-white/50 mb-1">Cím</p>
                <p className="text-xl font-medium">9700 Szombathely, Körmendi út 45.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <svg className="w-7 h-7 text-accent-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="label-technical text-white/50 mb-1">Telefonszám</p>
                <a href="tel:+36303899625" className="text-xl font-medium hover:text-accent-orange transition-colors">
                  +36 30 389 9625
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <svg className="w-7 h-7 text-accent-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="label-technical text-white/50 mb-1">Email</p>
                <a href="mailto:dtlcustoms.info@gmail.com" className="text-xl font-medium hover:text-accent-orange transition-colors">
                  dtlcustoms.info@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <svg className="w-7 h-7 text-accent-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <div>
                <p className="label-technical text-white/50 mb-1">Social</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61587179489147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium hover:text-accent-orange transition-colors"
                >
                  Facebook: DTL Customs
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-lowest p-8 border-l-4 border-accent-orange" id="ajanlatkeres">
            <h3 className="text-2xl font-bold uppercase mb-6 font-[family-name:var(--font-dm-sans)]">Ingyenes ajánlatkérés</h3>
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="relative h-[600px] lg:h-auto bg-surface-container-low grayscale">
          <Image
            src={MAP_IMG}
            alt="Szombathely térkép"
            fill
            className="object-cover opacity-50"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-accent-orange w-4 h-4 rounded-full animate-ping absolute" />
            <div className="bg-accent-orange w-4 h-4 rounded-full relative" />
            <div className="absolute mt-12 bg-surface px-4 py-2 label-technical border border-white/10 shadow-xl">
              DTL CUSTOMS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
