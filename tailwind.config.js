/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    colors: {
      blue: "#3D405B",
      green: "#81B29A",
      white: "#F4F1DE",
      yellow: "#F2CC8F",
      orange: "#E07A5F",
    },
  },
  plugins: [],
};
