// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-24": "linear-gradient(-110deg, var(--tw-gradient-stops))",
      },
    },
    borderRadius: {
      large: "1rem",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
