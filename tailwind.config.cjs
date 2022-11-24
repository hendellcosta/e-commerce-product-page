/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".html",
  ],
  theme: {
    extend: {
      textColor: {
        mainOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)'
      },
      borderColor: {
        paleOrange: 'hsl(25, 100%, 94%)'
      },
      boxShadowColor: {
        paleOrange: 'hsl(25, 100%, 94%)'
      },
      backgroundColor: {
        mainOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)'
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}