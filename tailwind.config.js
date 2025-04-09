/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-color":"#E7FE29",

      },
      fontFamily:{
        "sora":["Sora", "sans-serif"],
      },
      backgroundImage:{
        "hero-bg":"url('./src/assets/bg-shadow.png')"
      }
    },
  },
  plugins: [],
}