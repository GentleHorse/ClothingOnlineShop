/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['"Merriweather"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      gridTemplateColumns: {
        'auto-fit-20rem': 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
  },
  plugins: [],
}
