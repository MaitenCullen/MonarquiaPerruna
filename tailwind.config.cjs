/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
            "redPrimary": "#A01E12",
                    
            "yellowSecundari": "#E9B900",
                    
            "darkGrey": "#191919",
                    
            "mediumGrey": "#696969",
                    
            "lightGrey": "#D1D1D1",
                    
            "baseBlack": "#000000",
                    
            "baseWhite": "#FFFFFF",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
