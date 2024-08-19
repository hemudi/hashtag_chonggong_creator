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
        black: "#353535",
        primary: {
          200: "#FFB078",
          300: "#F5761C",
          500: "#B74C00",
        },
        secondary: {
          300: "#0A397B",
        },
        gray: "#3D4F59",
      },
      screens: {
        fold: "400px",
      },
      keyframes: {
        "neon-flicker": {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": {
            textShadow: "0 0 1px #EAEAEA, 0 0 10px #F5761C, 0 0 15px #F5761C",
          },
          "20%, 55%": {
            textShadow: "0 0 3px #EAEAEA, 0 0 10px #F5761C",
          },
        },
        spin: {
          "0%": {
            transform: "translateX(50%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(50%) rotate(360deg)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "neon-flicker": "neon-flicker 1s infinite",
        spin: "spin 8s linear infinite",
        fadeout: "fadeout 1s",
      },
    },
  },
  plugins: [],
};
