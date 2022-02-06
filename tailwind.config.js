module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron'],
        'poppins-bold': ['Poppins Bold'], 
        'poppins-medium': ['Poppins Medium'], 
        'poppins-regular': ['Poppins Regular'], 
        'poppins-semibold': ['Poppins SemiBold'],
        'playfair-display-bold': ['Playfair Display Bold'], 
        'playfair-display-medium': ['Playfair Display Medium'], 
        'playfair-display-regular': ['Playfair Display Regular'], 
        'playfair-display-semibold': ['Playfair Display SemiBold'],
      },
      colors: {
        'base-black': '#121212',
        'gray-65': '#656565',
        'gray-35': '#ACACAC',
        'boulder-100': '#777777',
        'boulder-65': '#A7A7A7',
        'boulder-35': '#CFCFCF',
        'rhino-100': '#2C465A',
        'rhino-65': '#768693',
        'rhino-35': '#B5BEC5',
        'boston-blue-100': '#3396E1'
      },
      height: {
        '36rem': '36rem',
        'avatar-border': '400px',
        'avatar-image': '379px',
        '512px': '512px',
      },
      width: {
        'title': '630px'
      }
      ,
      padding: {
        '120px': '120px',
        '100px': '100px'
      },
      translate: {
        '-28rem': '-28rem',
        '-dekstop': '-400px',
      },
      backgroundImage: {
        'space-img': "url('/images/bg-image.png')",
        'thumb-img': "url('/images/undraw_Landing_page.png')"
      },
      backgroundColor: {
        'dark': '#000000'
      },
      fontSize: {
        'title': ['70px', {
          letterSpacing: '0.3px',
          lineHeight: '80px',
        }],
        'caption': ['28px', {
          letterSpacing: '0.3px',
          lineHeight: '38px',
        }],
        'feature': ['34px', {
          letterSpacing: '0.3px',
          lineHeight: '44px',
        }],
        'title-feature': ['18px', {
          letterSpacing: '0.3px',
          lineHeight: '28px',
        }],
        'paragraph': ['14px', {
          letterSpacing: '0.3px',
          lineHeight: '24px',
        }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
