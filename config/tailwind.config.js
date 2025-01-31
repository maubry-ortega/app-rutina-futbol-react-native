module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-lock': '#2563EB',
        'primary-dark': '#0F172A',
        'primary-red': '#DC2626'
      },
      fontFamily: {
        'anime-ace': ['AnimeAce', 'sans-serif']
      }
    },
  },
  plugins: [],
}