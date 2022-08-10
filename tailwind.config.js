module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    extend: {
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'magenta': 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        'sans': ['Open Sans'],
        'headings': ['Poppins'],
      }
    },
  },
  plugins: [],
}
