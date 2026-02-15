import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        gold: "var(--color-gold)",
        cyan: "var(--color-light-cyan)",
        deepBlue: "var(--color-deep-blue)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(201, 148, 92, 0.45)"
      },
      keyframes: {
        "drift-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "drift-slow": "drift-slow 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
