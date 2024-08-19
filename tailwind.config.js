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
        tenada: ["var(--font-tenada)"],
        gmarketsans: ["var(--font-gmarketsans)"],
      },
      colors: {
        primary: {
          50: "#FFF5F9",
          100: "#FFE3F1",
          200: "#F2B3C4",
          300: "#B97E8E",
          500: "#6F3A4B",
        },
        secondary: {
          100: "#BEA5AA",
          200: "##564146",
          500: "#59363F",
        },
        gray: "#3D4F59",
        title: {
          main: "#59363F",
          sub: "#59363F",
          footer: "#59363F",
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
        "gradient-xy": "gradient-xy 1.5s ease infinite",
      },
    },
  },
  plugins: [],
};
