/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'jetbrains': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

