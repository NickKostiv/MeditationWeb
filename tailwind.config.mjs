/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        shadow:
          "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.1) 45%, #030813)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Arial", "sans-serif"],
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
