/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'grayscale': '#F7F7FC',
      },
    },
    fontSize: {
      xs: ['11px', '12px'],
      sm: ['13px', '16px'],
      base: ['16px', '24px'],
      lg: ['20px', '24.2px'],
      xl: ['24px', '32px'],
    },
    boxShadow:{
     'sm': '0px 20px 30px 1px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.2)',
    }
  },
  plugins: [],
}
