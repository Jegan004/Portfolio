/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 THIS IS MISSING AND REQUIRED
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

