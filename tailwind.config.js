/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'my-orange': '#EB6B39',
        'my-lightorange': '#eedfd9'
      },
      maxWidth: {
        '24': '24px',
        '32': '32px',
        '96': '96px',
        // Add more values as needed
      },
      minWidth: {
        '54': '54px',
        '97': '97px',
        // Add more values as needed
      },
      minHeight: {
        '54': '100px',
        // Add more values as needed
      },
    },
  },
  plugins: [],
});