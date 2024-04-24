/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#191917',
        'theme-red': '#C11119',
        'border-grey': '#232323',
        'faq': '#2D2D2D',
      },
    },
  },
  plugins: [],
}

