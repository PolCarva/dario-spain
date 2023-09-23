/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3-2-3': 'repeat(3, minmax(0, 1fr)) repeat(2, minmax(0, 1fr)) repeat(3, minmax(0, 1fr))',
        '2-2': 'repeat(2, minmax(0, 1fr)) repeat(2, minmax(0, 1fr))',
        '3-2-1': 'repeat(3, minmax(0, 1fr)) repeat(2, minmax(0, 1fr)) minmax(0, 1fr)',
      },
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
          detail: "#3B3E42"
        },
      },
      fontFamily: {
        logo: ["Josefin Sans", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
