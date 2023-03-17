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
        greyText: '#666666',
        black:"#000000",
        white:"#000000",
      },
    },
  },
  plugins: [require("daisyui")],
}
