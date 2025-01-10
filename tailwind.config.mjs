const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/aos/dist/aos.css",
  ],
  theme: {
    extend: {
      colors: {
        selected: "#ffffff",
        unselected: "#f0f0f0",
      },
      backgroundImage: {
        shadow:
          "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.1) 45%, #030813)",
        "pay-gradient":
          "radial-gradient(circle at 50% 57%, #000 -3%, #46c0dbcc 0, #000 13%)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Arial", "sans-serif"],
        sans: [
          '"Open Sans"',
          "Arial",
          "Helvetica",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".lg-px-custom": {
          "@media (min-width: 1024px)": {
            paddingLeft: "calc(50vw - 270px)",
            paddingRight: "calc(50vw - 270px)",
          },
        },
      });
    },
  ],
};
