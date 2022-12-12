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
        "bg-circle-lg": "30rem",
        "bg-circle": "15rem",
      },
      width: {
        "bg-circle-lg": "30rem",
        "bg-circle": "15rem",
      },
    },
  },
  plugins: [],
};
