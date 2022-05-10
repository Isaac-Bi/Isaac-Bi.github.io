module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/paint_banner.png')"
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'sunset': '#f16554'
      }
    },
  },
  plugins: [],
}
