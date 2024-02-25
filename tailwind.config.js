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
          50: "#f3e5f5",
          100: "#d1c4e9",
          200: "#b39ddb",
          300: "#9575cd",
          500: "#7e57c2",
        },
        secondary: {
          100: "#ffdc73",
          200: "#ffcf40",
          500: "#ffbf00",
        },
        gray: "#3D4F59",
        title: {
          main: "#ffffff",
          sub: "#f3e5f5",
          footer: "#ffffff",
        },
      },
      screens: {
        fold: "400px",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 8s ease infinite",
      },
    },
  },
  plugins: [],
};
