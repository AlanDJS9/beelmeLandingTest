/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3398",
        //primary: "#FF007E",
        secondary: "#a41262",
        footer: "#018E42",
      },
    },
  },
  plugins: [],
};
