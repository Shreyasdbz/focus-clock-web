/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: "32rem",
        "bg-circle-lg": "30rem",
        "bg-circle": "15rem",
      },
      width: {
        128: "32rem",
        "bg-circle-lg": "30rem",
        "bg-circle": "15rem",
      },
      colors: {
        "msft-brand": "#2f2f2f",
      },
    },
  },
  plugins: [],
};
