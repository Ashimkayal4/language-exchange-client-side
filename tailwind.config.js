/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  // This enables the dark mode toggle using the class strategy
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
