/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        'border-beam': {
          '0%': {
            left: '0%',
            top: '0%',
            transform: 'translateX(-100%)'
          },
          '25%': {
            left: '100%',
            top: '0%',
            transform: 'translateX(0)'
          },
          '25.1%': {
            left: '100%',
            top: '0%',
            transform: 'translateY(-100%)'
          },
          '50%': {
            left: '100%',
            top: '100%',
            transform: 'translateY(0)'
          },
          '50.1%': {
            left: '100%',
            top: '100%',
            transform: 'translateX(100%)'
          },
          '75%': {
            left: '0%',
            top: '100%',
            transform: 'translateX(0)'
          },
          '75.1%': {
            left: '0%',
            top: '100%',
            transform: 'translateY(100%)'
          },
          '100%': {
            left: '0%',
            top: '0%',
            transform: 'translateY(0)'
          }
        },
        'border-beam-2': {
          '0%': {
            left: '0%',
            top: '100%',
            transform: 'translateY(100%)'
          },
          '25%': {
            left: '0%',
            top: '0%',
            transform: 'translateY(0)'
          },
          '25.1%': {
            left: '0%',
            top: '0%',
            transform: 'translateX(-100%)'
          },
          '50%': {
            left: '100%',
            top: '0%',
            transform: 'translateX(0)'
          },
          '50.1%': {
            left: '100%',
            top: '0%',
            transform: 'translateY(-100%)'
          },
          '75%': {
            left: '100%',
            top: '100%',
            transform: 'translateY(0)'
          },
          '75.1%': {
            left: '100%',
            top: '100%',
            transform: 'translateX(100%)'
          },
          '100%': {
            left: '0%',
            top: '100%',
            transform: 'translateX(0)'
          }
        },
        'border-width': {
          '0%, 100%': { width: '10%' },
          '50%': { width: '90%' }
        },
        'beam-right': {
          '0%': {
            left: '50%',
            top: '0',
            height: '4px',
            width: '0px',
            opacity: '0'
          },
          '5%': {
            opacity: '1'
          },
          '45%': {
            left: '100%',
            top: '0',
            height: '4px',
            width: '40px',
          },
          '46%': {
            left: 'calc(100% - 4px)',
            top: '0',
            height: '40px',
            width: '4px',
          },
          '95%': {
            left: 'calc(100% - 4px)',
            top: '100%',
            height: '40px',
            width: '4px',
            opacity: '1'
          },
          '100%': {
            left: 'calc(100% - 4px)',
            top: '100%',
            height: '4px',
            width: '4px',
            opacity: '0'
          }
        },
        'beam-left': {
          '0%': {
            left: '50%',
            top: '0',
            height: '4px',
            width: '0px',
            opacity: '0'
          },
          '5%': {
            opacity: '1'
          },
          '45%': {
            left: '0',
            top: '0',
            height: '4px',
            width: '40px',
          },
          '46%': {
            left: '0',
            top: '0',
            height: '40px',
            width: '4px',
          },
          '95%': {
            left: '0',
            top: '100%',
            height: '40px',
            width: '4px',
            opacity: '1'
          },
          '100%': {
            left: '0',
            top: '100%',
            height: '4px',
            width: '4px',
            opacity: '0'
          }
        }
      },
      animation: {
        'border-beam': 'border-beam 4s linear infinite',
        'border-beam-2': 'border-beam-2 4s linear infinite',
        'border-width': 'border-width 8s ease infinite',
        'beam-right': 'beam-right 2s ease-in infinite',
        'beam-left': 'beam-left 2s ease-in infinite'
      }
    },
  },
  plugins: [],
}
