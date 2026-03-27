"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface GarageBackgroundProps {
  opacity?: number;
  parallaxSpeed?: number;
}

export function GarageBackground({
  opacity = 0.15,
  parallaxSpeed = 50,
}: GarageBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [parallaxSpeed]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -top-[20%] -bottom-[20%] pointer-events-none z-0"
      style={{ opacity }}
    >
      <Image
        src="/garage-bg.jpg"
        alt=""
        fill
        className="object-cover"
        quality={60}
        sizes="100vw"
        aria-hidden="true"
      />
    </div>
  );
}
