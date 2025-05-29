module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tender-dark': '#003366',    // Deep blue
        'tender-light': '#66CCCC',   // Light teal
        'tender-black': '#111111',   // Text black
      },
    },
  },
  plugins: [],
};