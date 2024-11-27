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
        'login-bg': "url('/src/assets/fondo_login.png')", // Path to your image
      },
      colors: {
        primary: '#32B4A8',
        secondary: '#3fa79d',
        primary_ligth: '#bff5f0',
      },
    },
  },
  plugins: [],
});

