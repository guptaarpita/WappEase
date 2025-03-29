/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#0284c7',
        secondary: '#0ea5e9',
        deep: '#0369a1',
        background: '#040b14',
      },
    },
  },
  plugins: [],
};