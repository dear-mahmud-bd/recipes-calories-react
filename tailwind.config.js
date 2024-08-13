/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '550px',
        '895': '895px',
        '990': '990px',
      },
    },
  },
  plugins: [],
}

