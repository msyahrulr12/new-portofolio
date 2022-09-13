/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          500 : '#0B192E',
          300 : '#0B1A31',
          200 : '#0B1930'
        },
        'secondary': {
          600 : '#64FFDA'
        },
        'purple-main': '#CCD6F6',
        'gray-main': '#8892AF',
        'ghost-white' : '#F8F8FF'
      },
      fontFamily: {
        'sffont': ['SF Mono', 'sans-serif'],
        'calibre': ['Calibre', 'sans-serif']
      }
    },
  },
  plugins: [],
}
