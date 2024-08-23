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
    },
    colors: {
      or: "#fca5a5",
      mr: "#f87171",
      allin: "#ef4444",
      iso: "#dc2626",
      call: "#b91c1c",
    },
  },
  daisyui: {
    themes: ["fantasy", "forest"],
  },
  plugins: [daisyui],
  darkMode: "selector",
};
