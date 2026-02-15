/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#010409',
        'brand-navy': '#0d1117',
        'brand-blue': '#1f6feb',
        'brand-cyan': '#00ffff',
        'brand-purple': '#8957e5',
        'brand-green': '#238636',
        'brand-glow': 'rgba(0, 255, 255, 0.2)',

        // Light theme colors
        'light-bg': '#f8f9fa',
        'light-text': '#212529',
        'light-card': '#ffffff',
        'light-border': '#dee2e6',
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'subtle-glow': 'subtle-glow 4s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff', color: '#00ffff' },
          '50%': { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #8957e5', color: '#a37fff' },
        },
        'subtle-glow': {
          'from': { boxShadow: '0 0 5px -1px #00ffff' },
          'to': { boxShadow: '0 0 10px 2px #8957e5' },
        },
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-20px)' },
          '100%': { transform: 'translatey(0px)' },
        },
      },
    },
  },
  plugins: [],
};
