import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    { pattern: /^(rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?)$/ },
    { pattern: /^rounded-(t|r|b|l|tl|tr|br|bl)-(sm|md|lg|xl|2xl|3xl|full)$/ }
  ],
  theme: {
    extend: {
      colors: {
        heading: "#111827", // títulos
        secondary: "#6B7280", // textos secundarios
        primary: "#7065F0", // morado
      },
      boxShadow: {
        card: "0 8px 24px rgba(17, 24, 39, 0.06)",
        primary: "0 6px 18px rgba(124, 58, 237, 0.35)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
