/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '380px'
      },
      animation: {
        'pulse-short' : 'fade 0.5s ease-in-out',
        'pulse-veryshort' : 'fade 0.25s ease-in-out',
        'pulse-shortout' : 'disappear 0.9s ease-in-out',
        'width' : 'widthshow 0.3s ease-in-out',
        'spin-long': 'spinner 10s linear infinite'
      },
      keyframes: {
        fade: {
          '0%' : { opacity: 0 },
          '100%' : { opacity: 1 }
        },
        disappear: {
          '0%' : { opacity: 0 },
          '20%' : { opacity: 1},
          '60%' : { opacity: 1},
          '100%' : { opacity: 0 }
        },
        widthshow: {
          '0%' : { width: '0%', opacity: 0 },
          '100%' : { width: '100%', opacity: 1 }
        },
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

