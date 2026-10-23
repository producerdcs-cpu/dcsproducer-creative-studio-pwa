/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-dark": "#B8972E",
        obsidian: "#0A0A0A",
        graphite: "#333333",
        ice: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
