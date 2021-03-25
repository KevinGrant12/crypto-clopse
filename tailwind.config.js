const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      container: {
        center: true
      },
      extend: {},
      fontFamily: {
        'display': ['Fjalla One'],
        // 'body': ['Open Sans'],
      },
      colors: {
        blue: '#07adef',
        tomato: '#ea3443',
        gray: '#a2a2a2',
        green: '#33ce86',
        black: 'black',
        blacksmoke: '#141414',
        redtidelight: '#d71f3',
        // redtidedark: '#5a2133',
        whitesmoke: 'whitesmoke',
        white: colors.white,
        grayborder: '#dadada',
      }
    },
    variants: {
      extend: {
        backgroundColor: ['hover', 'active'],
        textColor: ['hover', 'active'],
        opacity: ['disabled'],
      }
    },
    plugins: [],
  }
