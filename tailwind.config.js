/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'good-gray': '#D9D9D9',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

