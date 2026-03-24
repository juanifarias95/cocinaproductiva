
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'beige-sand': 'var(--beige-sand)',
        'cream-ivory': 'var(--cream-ivory)',
        'white': 'var(--white)',
        'taupe': 'var(--taupe)',
        'taupe-light': 'var(--taupe-light)',
        'coffee': 'var(--coffee)',
        'coffee-dark': 'var(--coffee-dark)',
        'gold-matte': 'var(--gold-matte)',
        'gold-light': 'var(--gold-light)',
        'text-body': 'var(--text-body)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
