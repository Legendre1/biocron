/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'label': ["Abel", "sans-serif"],
        'title': ["Kanit"],
        'body': ["Dosis"],
      }
    },
  },
  plugins: [],
}


