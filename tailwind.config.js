/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8d000',
        'primary-dark': '#e6be00',
        'primary-light': '#ffe033',
      },
    },
  },
  plugins: [],
};