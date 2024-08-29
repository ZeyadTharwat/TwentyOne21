/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      },
      screens: {
        default: "1360px",
    },
    },

    extend: {
      fontFamily:{
        vissa:"Vissa",
        houschka:"Houschka",
        syne:'"Syne", sans-serif',
        lato:'"Lato", sans-serif'
      },
      backgroundImage:{
        footer:"url('/src/assets/FooterBg.svg')",
        about:"url('/src/assets/AboutHeader.png')",
        whatTheySay:"url('/src/assets/WhatTheySayBg.png')",
        textureBg:"url('/src/assets/TextureBg.png')"

      },
      colors:{
        primary:"#BA0A40"
      }
    },
  },
  plugins: [],
}