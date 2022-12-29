/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,tsx}"],
  theme: {
    extend: {
      colors: {
      }
    }
  }
};
