const { isLabelWithInternallyDisabledControl } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../components/**/*.{js,jsx,ts,tsx}",
    "../pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      //  'blue' : ''
      //   // 'blue' :'#2596be',
      //   // 'grey' : 'd9d9d9',
      //   // 'peach' : 'e9997f',
  
      }

    },

  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}