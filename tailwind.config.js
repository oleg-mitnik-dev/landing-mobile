const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Roboto"', ...defaultTheme.fontFamily.sans],
        'roboto': '"Roboto", sans-serif',
        'peace': '"Peace Sans", sans- serif',
        'garamond': '"Garamond", sans-serif',
        'lato': '"Lato", sans-serif'
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./assets/styles/input.css -o ./assets/styles/output.css --watch
// San Francisco Pro Text (SF Pro Text) --  для текста до 19 включительно
// San Francisco Pro Display (SF Pro Display) -- для текста от 20 и выше
