/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    theme: {
        extend: {
            keyframes: {
                blink: {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                }
              },
              animation: {
                blink: 'blink 2s linear infinite',
              },
            colors: {
                    light: {
                        bg: colors.white,
                        border: colors.black,
                        text: colors.black,
                        orange: colors.orange[600],
                        emerald: colors.green[600],
                    },
                    dark: {
                        bg: '#4a4a4a',
                        border: colors.gray[500],
                        text: colors.gray[100],
                        orange: colors.orange[300],
                        emerald: colors.green[300],
                    },
                    twitterblue: '#1DA1F2',
                    shinyYellow: '#eded26',
            },
            fontFamily: {
                pkmEmerald: ['pkmEmerald']
            },
            screens: {
                'sm': { 'max': '576px'},
            },
        },
    },
    plugins: [],
}


