export const GSAP_DEFAULTS = {
  fadeUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.6, ease: "power2.out" },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
  },
  slideLeft: {
    from: { opacity: 0, x: -80 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
  },
  slideRight: {
    from: { opacity: 0, x: 80 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
  },
  stagger: 0.12,
} as const;
