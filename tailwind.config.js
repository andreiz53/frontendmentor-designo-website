/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E7816B',
        'primary-light': '#FFAD9B',
        'primary-lighter': "#FDF3F0",
        'white': '#FFFFFF',
        'black': '#1D1C1E',
        'light': '#F1F3F5DB',
        'dark': '#333136'
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif']
      },
      maxWidth: {
        'm': "1100px"
      }
    },
  },
  plugins: [],
}

