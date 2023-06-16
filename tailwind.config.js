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
        'white': '#FFFFFF',
        'black': '#1D1C1E',
        'neutral-100': '#F1F3F5DB',
        'neutral-900': '#333136'
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif']
      }
    },
  },
  plugins: [],
}

