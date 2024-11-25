/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        headerBackground: '#5964E0',
        searchColor: '#5964E0',
        countryNameColor:'#5964E0',
        darkBg: '#121212',
        darkCard: '#1E1E1E',
        darkText: '#E5E7EB',
      },
    },
  },
  plugins: [],
};