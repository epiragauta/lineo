/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/src/assets/bg/fondo_sena.png')",
      },
      colors: {
        primary: '#39A900',
        primary_light: '#39A90052',
        secondary: '#007832',
        dark_blue: '#00304D',
        dark_blue_light: '#00304D52',
      },
    },
  },
  plugins: [],
});