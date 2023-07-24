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
        '48': '48px',
        // Add more values as needed
      },
      minWidth: {
        '12': '12px',
        // Add more values as needed
      },
      minHeight: {
        '12': '12px',
        // Add more values as needed
      },
    },
  },
  plugins: [],
});