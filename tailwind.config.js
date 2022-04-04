module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    colors: {
      primary: '#2C7BE5',
      secondary: '#27AE60',
      tetiary: '#F2C94C',
      danger: '#EB5757',
      warning: '#F2994A',
      success: '#6FCF97',

      black: '#000000',

      white: {
        default: '#FFFFFF',
        'off-white': '#F9FBFD',
      },
      blue: {
        azure: '#2C7BE5',
        oxford: '#0F172A',
        alice: '#E3EBF6',
        yonder: '#95AAC9',
      },
      green: {
        default: '#27AE60',
        'go-green': '#27AE60',
      },
      orange: {
        default: '#F2C94C',
        crayola: '#F2C94C',
      },
      red: {
        salsa: '#EB5757',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
