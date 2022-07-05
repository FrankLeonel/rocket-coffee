/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Manrope, sans-serif",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "769px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        transparent: "transparent",
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
      textShadow: {
        shadow:
          "-1px -1px 0 rgb(130,87,229), 1px -1px 0 rgb(130,87,229), -1px 1px 0 rgb(130,87,229), 1px 1px 0 rgb(130,87,229)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
