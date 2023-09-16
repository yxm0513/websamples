/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#647eff',
        // primary: 'rgb(189,147,249)',
        secondary: '#aac8e4',
        // secondary: '#8be9fd',
        accent: '#00dc82',
        light: 'rgb(248,248,242)',
        custom: '#1a1a1a',
        // custom: '#282a36',
      },
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
      boxShadow: {
        custom: '0 5px 10px 0 rgba(0, 0, 0, .15)',
      },
    },
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    shadowOpacity: false,
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
