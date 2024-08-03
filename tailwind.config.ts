/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(to top, transparent 0%, #da5726 100%)',
      },
      colors: {
        white: '#FDFDFD',
        primary: '#da5726',
        'primary-light': '#eeb283',
        'primary-dark': '#ae3f20',
        secondary: '#591F27',
        background: 'var(--background)',
        card: 'var(--card)',
        border: 'var(--border)',
        text: 'var(--text)',
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
      xl: { max: '1400px' },
      lg: { max: '1200px' },
      md: { max: '991px' },
      sm: { max: '550px' },
      xsm: { max: '375px' },
    },
  },
  plugins: [],
};
