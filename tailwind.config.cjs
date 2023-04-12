/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#A01E12",
        yellowPrimary: "#E9B900", /* este color está repetido en la línea 8 */
        darkPrimary: " #191919",
        greyMedium: "##696969",
        greyPrimary: '#D1D1D1',
        greyLight:'#F5F5F5F0',
        greyText: '#666666',
        black:"#000000",
        white:"#FFFFFF",
        redLetters: "#9D0308",
        blackLetters: "#191919"
      },
    },
  },
  plugins: [require("daisyui")],
}
