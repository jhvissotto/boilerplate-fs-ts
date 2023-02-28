const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/view/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/view/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters')],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
}
