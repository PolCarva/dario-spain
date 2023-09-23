/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#672130",
          subtle: "#B0455B",
          hover: "#570F1D",
        },
        black: {
          DEFAULT: "#191D20",
        },
        white: {
          DEFAULT: "#F8F8F8",
        },
        gray: {
          DEFAULT: "#CFCFCF",
          detail: "#3B3E42",
        },
      },
      fontFamily: {
        logo: ["Josefinasans-Regular", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
