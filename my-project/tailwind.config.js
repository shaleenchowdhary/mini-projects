/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'show': 'cubic-bezier(1,0,1,0)',
        'hide': 'cubic-bezier(0,1,0,1)'
      }
    },
  },
  plugins: [],
};