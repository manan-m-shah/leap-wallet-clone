/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'darkBlueBg': '#0C1021',
        'normalBlueBg': '#121831',
        'lightBlueBg': '#333C55',
        'greenBg': '#29A874',
        'lightGreenBg': '#BBFFDB',
        'darkGrayBg': '#94A7D80D',
        'lightGrayBg': '#8B8B8B',
        'greenText': '#5BFF7F',
        'grayText': '#FFFFFF80'
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}
