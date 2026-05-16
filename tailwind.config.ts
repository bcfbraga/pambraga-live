import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1410",
        mist: "#F8F2E9",
        pearl: "#F8F2E9",
        clay: "#7A6B5C",
        rosewood: "#8B4513",
        champagne: "#D9CCB6",
        cream: "#F4E4D1",
        sand: "#EFE5D5",
        wheat: "#E8DCC6",
        cocoa: "#5C2E0B",
        smoke: "#3A2E26",
        pine: "#2C3E50",
        whatsapp: "#25D366",
      },
      boxShadow: {
        soft: "0 18px 32px -16px rgba(0, 0, 0, 0.18)",
        glow: "0 12px 28px rgba(139, 69, 19, 0.18)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
