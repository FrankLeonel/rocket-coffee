/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: "Manrope, sans-serif",
      },
      screens: {
        xs: "0px",
        sm: "468px",
        xl: "1200px",
      },
      colors: {
        neutral: {
          100: "#FAFAFA",
          900: "#000000",
        },
        violet: {
          500: "#8257e5",
        },
        gray: {
          200: "#E1E1E6",
          400: "#a8a8b3",
          800: "#29292e",
        },
      },
    },
  },
  plugins: [],
};
