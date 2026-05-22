/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#071952',
          dark: '#020b26',
          light: '#132863',
          card: '#0a1d56',
        },
        royal: {
          DEFAULT: '#0B60B0',
          dark: '#084885',
          light: '#3b8dd9',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#e5c05c',
          dark: '#b39025',
        },
        soft: '#F5F7FA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Poppins', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
