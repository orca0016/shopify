/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "background-gray": "#262626",
      "accent": "#00FCC6",
      "dark-card": "#000",
      "btn-card": "#7f00ff",
      red: "#d32f2f",
      white: "#fff",
    },
  },
  plugins: [],
}


