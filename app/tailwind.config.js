/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        primary: "#0a0a0a",
        light: "#f9f9f9",
        grayCustom: "#6b6b6b",
        accent: "#a67c52",
      },
    },
  },
  plugins: [],
};