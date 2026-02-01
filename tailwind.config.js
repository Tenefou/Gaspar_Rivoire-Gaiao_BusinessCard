/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0f7ff",
          100: "#b3eeff",
          200: "#80e5ff",
          300: "#4ddbff",
          400: "#38bdf8",
          500: "#38bdf8",
          600: "#2da3d9",
          700: "#2389ba",
          800: "#1a6f9b",
          900: "#0c4a6e",
        },
        dark: {
          950: "#020617",
          900: "#0f172a",
          850: "#0a0f1e",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
        },
        secondary: {
          DEFAULT: "#b6b7b9",
          light: "#d1d2d4",
          dark: "#9b9c9e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
