/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      primaryBg: "rgb(var(--primaryBg))",
      secondryBg: "rgb(var(--secondryBg))",
      hoverBg: "rgb(var(--hoverBg))",
      popupBg: "rgb(var(--popupBg))",
      primaryTxt: "rgb(var(--primaryTxt))",
      secondryTxt: "rgb(var(--secondryTxt))",
      accent: "rgb(var(--accentColor))",
      border: "rgb(var(--borderColor))",
      danger: "rgb(244 34 47)",
      tooltipBg: "rgb(72 90 104)",
      blueColor: "rgb(29 155 240)",
      greenColor: "rgb(0 186 124)",
      pinkColor: "rgb(249 24 128)",
    },
    fontFamily: {
      chirp: ["chirp", "Poppins"],
      "chirp-bold": ["chirp-bold", "Poppins"],
      "chirp-black": ["chirp-black", "Poppins"],
      poppins: ["Poppins", "ui-serif", "system-ui"],
      "chirp-semibold": ["chirp-semibold", "Poppins"],
    },
    fontSize: {
      10: "10px",
      13: "13px",
      15: "15px",
      20: "20px",
    },
    extend: {
      spacing: {
        12.5: "3.125rem",
        25: "6.25rem",
        "9/10": "90%",
      },
      boxShadow: {
        twitter:
          "0 0 15px rgb(var(--primaryTxt)/.2), 0 0 3px 1px rgb(var(--primaryTxt)/.2)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".transition-300": {
          transition: "all 0.3s linear",
        },
        ".transition-200": {
          transition: "all 0.2s linear",
        },
      });
    }),
  ],
};
