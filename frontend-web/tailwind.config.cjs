/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7f7',
          100: '#f1efef',
          200: '#e7e1e1',
          300: '#d5cccc',
          400: '#bcaead',
          500: '#998685',
          600: '#8b7877',
          700: '#736362',
          800: '#615453',
          900: '#534a49',
        }
      },
      gridTemplateColumns: {
        'lg': '250px auto',
        'xl': '250px auto 250px'
      }
    },
  },
  plugins: [],
}
