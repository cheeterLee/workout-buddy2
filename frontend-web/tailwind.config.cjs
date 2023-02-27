/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: "#3DADBA",
          bgdark: "#324B4E",
          bglight: "#95B0B4",
          gaddark: "#A397CF",
          gadlight: "#6E6498",
        }
      }
    },
  },
  plugins: [],
}
