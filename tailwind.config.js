module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}','./Blocks/**/*.{js,ts,jsx,tsx}','./Layout/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        bordo : '#972355',
        darkblue : '#091638'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
