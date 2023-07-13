/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#4ADE80",
        "green-100": "#2FBA5A",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
