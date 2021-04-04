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
        'body': ['Karla'],
      },
      colors: {
        blue: '#07adef',
        bluedark: '#065677',
        blueghost: '#edf4ff',
        blueheader: '#044058',
        tomato: '#ea3443',
        gray: '#a2a2a2',
        grayborder: '#b5b5b5',
        graybody: '#777777',
        green: '#33ce86',
        black: 'black',
        blacksmoke: '#141414',
        redtidelight: '#d71f3',
        // redtidedark: '#5a2133',
        whitesmoke: 'whitesmoke',
        white: colors.white,
        whitetrans: 'rgba(255,255,255, 0.8)'
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
