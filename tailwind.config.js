/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Noto Serif SC"', ...defaultTheme.fontFamily.serif],
        'mono': ['"Roboto Mono"', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [],
}