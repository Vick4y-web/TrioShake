/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode:"class" ,
  theme: {
    extend: {
      colors:{
        primary:"#a8a354",
        secondary:"#1e1e1e"
      },
      Container:{
        centre:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

