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
        accent: '#0369a1',
        background: '#040b14',
        'cyber-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(2, 132, 199, 0.2)',
        'cyber-lg': '0 0 30px rgba(2, 132, 199, 0.3)',
      },
    },
  },
  plugins: [],
};