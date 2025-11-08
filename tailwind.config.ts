import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37",
          light: "#F8F9FA",
        },
        secondary: "#FFFFFF",
        accent: "#D4AF37",
        navy: "#0A2342",
        gold: "#D4AF37",
        "background-light": "#FFFFFF",
        "background-dark": "#0A2342",
        "text-light": "#0A2342",
        "text-dark": "#FFFFFF",
        "text-muted-light": "#556479",
        "text-muted-dark": "#a0aec0",
        "border-light": "#E2E8F0",
        "border-dark": "#2D3748",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;

