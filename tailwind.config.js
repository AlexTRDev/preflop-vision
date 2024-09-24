/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Fuente predeterminada sans-serif
        serif: ["Lora", "serif"], // Fuente predeterminada serif
      },
      // Extiende las columnas y filas del grid para 13x13
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        13: "repeat(13, minmax(0, 1fr))",
      },
    },
  },
  daisyui: {
    themes: ["forest"], // Mantienes tus temas existentes
  },
  plugins: [daisyui],
  darkMode: "selector",
};
