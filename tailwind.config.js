module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      'grid': '1312px',
    },
    extend: {
      colors: {
        'theme': '#B23D2B',
      }
    },
  },
  plugins: [],
}