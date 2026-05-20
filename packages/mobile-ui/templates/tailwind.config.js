/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@fg-design-system/mobile-ui/tailwind")],
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@fg-design-system/mobile-ui/**/*.{js,jsx,ts,tsx}",
  ],
};
