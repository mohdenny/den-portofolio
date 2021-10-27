module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'height': {
        '36rem': '36rem'
      },

      'translate': {
        '-28rem' : '-28rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
