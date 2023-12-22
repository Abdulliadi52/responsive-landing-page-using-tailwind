/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url('/images/borabora.jpg')",
      },
      fontFamily: {
        faimily1: "poppins",
      },
      width: {
        w1: "50px",
      },
    },
  },
  plugins: [],
};
