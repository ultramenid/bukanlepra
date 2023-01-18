const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
      'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
  },},
  },
  plugins: [],
}
