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
          500: "#760000",
        },
        secondary: {
          100: "#7fb36f",
          200: "#5f8752",
          500: "#34502B",
        },
        gray: "#3D4F59",
        title: {
          main: "#760000",
          sub: "#ffffff",
          footer: "#ffffff",
        },
      },
      screens: {
        fold: "400px",
      },
    },
  },
  plugins: [],
};
