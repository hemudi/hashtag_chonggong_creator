/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GmarketSans: ["GmarketSans", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#b4eee0",
          200: "#99ece1",
          500: "#54e1c2",
        },
        secondary: {
          100: "#DFF2FF",
          200: "#C6E7FF",
          500: "#6DC2FF",
        },
        gray: "#3D4F59",
      },
      screens: {
        fold: "400px",
      },
    },
  },
  plugins: [],
};
