import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#131313",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-low": "#1c1b1b",
        "on-surface": "#e5e2e1",
        primary: "#ffb693",
        "primary-container": "#ea6b1e",
        "on-primary": "#562000",
        secondary: "#eec05b",
        outline: "#a78b7e",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-inter)"],
        label: ["var(--font-space-grotesk)"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(234,107,30,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(234,107,30,0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
