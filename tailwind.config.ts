/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#da5726',
        secondary: '#591F27',
      },
      fontFamily: {
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        header: '1.3fr 2fr',
      },
    },
    screens: {
      xl: { max: '1200px' },
      lg: { max: '991px' },
      md: { max: '767px' },
      sm: { max: '550px' },
      xsm: { max: '375px' },
    },
  },
  plugins: [],
};
