"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface GarageBackgroundProps {
  /** How dark the overlay is (higher = darker, less visible). Default 0.6 */
  darkness?: number;
  parallaxSpeed?: number;
}

export function GarageBackground({
  darkness = 0.6,
  parallaxSpeed = 30,
}: GarageBackgroundProps) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el.closest("footer") || el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [parallaxSpeed]);

  return (
    <div data-garage-bg="" className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Garage photo — parallax */}
      <div
        ref={imgRef}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <Image
          src="/garage-bg.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "brightness(1.3)" }}
          quality={70}
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      {/* Dark overlay to control garage visibility */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(10, 10, 10, ${darkness})` }}
      />
    </div>
  );
}
