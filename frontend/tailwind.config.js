/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        customBlueDark: '#12486B',
        customBlue700: '#1A4968',
        customBlueMedium: '#419197',
        customBlueLight: '#78D6C6',
        customOrange: '#F99417',
        customWhiteOff: '#F5FCCD',
        customBlackOff: '#240115',
      },
      backgroundImage: theme => ({
        'gradient-to-left': 'linear-gradient(to left, var(--tw-gradient-stops))',
     }),
    },
  },
  plugins: [],
}

