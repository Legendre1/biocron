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
        'body': ["Kanit"],
        'title': ["Dosis"],
      }
    },
  },
  plugins: [],
}


