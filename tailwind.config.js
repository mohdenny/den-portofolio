module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron'],
        'roboto-medium': ['Roboto Medium'],
        'roboto-regular': ['Roboto'],
      },
      height: {
        '34rem': '34rem'
      },
      translate: {
        '-28rem': '-28rem'
      },
      backgroundImage: {
        'space-img': "url('/images/bg-image.png')"
      },
      backgroundColor: {
        'dark': '#000000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
