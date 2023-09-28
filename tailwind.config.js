const
  defaultTheme =
    require('tailwindcss/defaultTheme');


/** @type
{import('tailwindcss').Config} */

module.exports
  = {

    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],

  theme: {

    extend: {

      screens: {

        'lscape': {
          'raw': '(min-aspect-ratio: 1/1)'
        },

        'wide': {
          'raw': '(min-aspect-ratio: 16/9)'
        },

        'verywide': {
          'raw': '(min-aspect-ratio: 18/9)'
        },

        'ultrawide': {
          'raw': '(min-aspect-ratio: 21/9)'
        },

      },

      colors: {

        'black':
          '#000000',

        'white':
          '#ffffff',

        'meeow-blue':
          '#394ced',

        'meeow-blue-2':
          '#182ac6',

        'meeow-blue-light':
          '#f5f5ff',

        'meeow-green':
          '#00C4C4',

        'meeow-green-2':
          '#04c9c9',

        'meeow-purple':
          '#9231ce',

        'meeow-purple-2':
          '#8f2cc2',

        'meeow-red':
          '#ef0012',

        'meeow-red-2':
          '#c9001f',

        'meeow-grey':
          '#848484',

        'meeow-grey-2':
          '#848484',

        'grey-dark':
          '#171717',

        'grey-1':
          '#9f9f9f',

        'grey-2':
          '#d8d8d8',

        'grey-3':
          '#f4f4f4',

        'grey-4':
          '#f7f7f7',

        'grey-5':
          '#fafafa',

        'grey-6':
          '#ebebeb',

        'meeow-primary-grayscale':
          '#535353',

        'dark-blue':
          '#0c0d34',

        'barclays-blue':
          '#00AEEF',

        'meeow-property':
          '#FA9938',

        'meeow-marketing':
          '#FA38CD',

        'meeow-business':
          '#38AFFA',

        'meeow-financial':
          '#00B430',

        'meeow-tech':
          '#FD2727',

        'meeow-manufacturing':
          '#5E348C',

        'accent':
          'var(--accent)',

        'meeow-navy':
          '#04094E',

      },



      fontFamily: {

        'sans': [
          'Sofia Pro', ...defaultTheme.fontFamily.sans],

      },



      spacing: {

        'unset':
          'unset',

      },

    },



    borderRadius: {

      '0':
        '0px',

      'xxs':
        '4px',

      'xs':
        '6px',

      'sm':
        '8px',

      DEFAULT: '12px',

      'lg':
        '15px',

      'xl':
        '18px',

      'full':
        '9999px',

    },



    fontSize: {

      'xs': [
        '12px', {

          'letterSpacing':
            '-0.3px',

          'lineHeight':
            '18px',

        }],

      'sm': [
        '14px', {

          'letterSpacing':
            '-0.35px',

          'lineHeight':
            '20px',

        }],

      'base': [
        '15px', {

          'letterSpacing':
            '-0.38px',

          'lineHeight':
            '20px',

        }],

      'big': [
        '16px', {

          'letterSpacing':
            '-0.4px',

          'lineHeight':
            '24px',

        }],

      'lg': [
        '18px', {

          'letterSpacing':
            '-0.45px',

          'lineHeight':
            '28px',

        }],

      'xl': [
        '20px', {

          'letterSpacing':
            '-0.45px',

          'lineHeight':
            '28px',

        }],

      '2xl': [
        '22px', {

          'letterSpacing':
            '-0.55pt',

          'lineHeight':
            '26px',

        }],

      '3xl': [
        '25px', {

          'letterSpacing':
            '-0.63px',

          'lineHeight':
            '30px',

        }],

      '4xl': [
        '30px', {

          'letterSpacing':
            '-0.75px',

          'lineHeight':
            '40px',

        }],

      '5xl': [
        '40px', {

          'letterSpacing':
            '-1px',

          'lineHeight':
            '40px',

        }],

      '6xl': [
        '50px', {

          'letterSpacing':
            '-1px',

          'lineHeight':
            '57px',

        }],

      'huge': [
        '60px', {

          'letterSpacing':
            '-1.5px',

          'lineHeight':
            '70px',

        }],

    },



    letterSpacing: {

      '1':
        '0.01em',

    },

    boxShadow: {

      'xs':
        '0 0 2px rgba(0, 0, 0, 0.14)',

      'sm':
        '0 0 3px rgba(0, 0, 0, 0.14)',

      'b-sm':
        '0 3px 3px -3px rgba(0, 0, 0, 0.14)',

      'md':
        '0 0 6px rgba(0, 0, 0, 0.14)',

      'lg':
        '0 0 10px rgba(0, 0, 0, 0.14)',

      'b-lg':
        '0 10px 10px -10px rgba(0, 0, 0, 0.14)',

      't-md':
        '0 -3px 6px rgba(0, 0, 0, 0.14)',

    },

  },



  plugins: [],

};

