/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.hml","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bluewee-100':'#CEE0FF',
        'bluewee-500':'#0730FB',
        'bluewee-700':'#0C2188',
        'whitewee-200':'#F2F3F7'
      },
      spacing: {
        '10vh':'10vh',
        '20vh':'20vh',
        '30vh':'30vh',
        '40vh':'40vh',
        '50vh':'50vh',
        '60vh':'60vh',
        '70vh':'70vh',
        '80vh':'80vh',
        '90vh':'90vh',
        '100vh':'100vh',
        '3/5':'60%',
        '3/10':'30%',
        '3full':'300%'
      },
    },
  },
  plugins: [],
}