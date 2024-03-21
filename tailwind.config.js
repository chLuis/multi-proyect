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
        'pulse-star' : 'star 5s ease-in-out infinite',
        'width' : 'widthshow 0.3s ease-in-out',
        'spin-long': 'spinner 30s linear infinite',
        'heigh-size-up': 'grow 20s linear infinite',
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
        },
        grow: {
          '0%': { height: '240px', bottom: '208px' },
          '50%': { height: '300px', bottom: '148px' },
          '100%': { height: '240px', bottom: '208px' },
        },
        star: {
          '0%': { transform: 'scale(0.3) translate(1px, 1px)', opacity: 0.5, filter: 'blur(4px)'},
          '35%' : {filter: 'blur(2px)'},
          '50%': { transform: 'scale(0.6) translate(4px, -2px)', opacity: 1, filter: 'blur(1px)'},
          '65%' : {filter: 'blur(2px)'},
          '100%': { transform: 'scale(0.3) translate(1px, 1px)', opacity: 0.5, filter: 'blur(4px)'},
        }
      }
    },
  },
  plugins: [],
}

