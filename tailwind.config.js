const { isLabelWithInternallyDisabledControl } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#fff',
        'blue' :'#2596be',
        'bg-2' : 'a8d0e6',
        'grey' : 'd9d9d9',
        'peach' : 'e997f',
  
      }

    },

  },
  plugins: [],
}