module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128' : '1280px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}