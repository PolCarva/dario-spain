/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#672130",
          subtle: "#B0455B",
        },
        black: {
          DEFAULT: "#191D20",
        },
        white: {
          DEFAULT: "#F8F8F8",
        },
        gray: {
          DEFAULT: "#CFCFCF",
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
