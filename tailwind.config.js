module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '800px',
      md: '1200px',
      lg: '1600px',
      xl: '1920px',
      '2xl': '2400px',
    },
    fontFamily: {
      sans: ['OpenSans', 'sans-serif'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      colors: {
        'aeg-black': '#0e1414',
        'aeg-white': '#fdfdfd',
        'aeg-gray': '#b9b9b9',
        'aeg-red': '#ca142f',
        translucent: '#e5e7eb87'
      },
      fontFamily: {
        sansCondensed: ['OpenSans SemiCondensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
