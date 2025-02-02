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
        partialsans: ["var(--font-partialsans)"],
        gmarketsans: ["var(--font-gmarketsans)"],
        blackopsone: ["var(--font-blackopsone)"],
      },
      colors: {
        black: "#353535",
        primary: {
          200: "#FF35F9",
          300: "#9704BF",
          500: "#8C031C",
        },
        secondary: {
          200: "#030BA6",
          300: "#030A8C",
          500: "#0E1259",
        },
        gray: "#3D4F59",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 25%, #FF35F9 50%, #FFFFFF 75%, #FFFFFF 100%)",
      },
      screens: {
        fold: "400px",
      },
      keyframes: {
        "move-side": {
          "0%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(600%)" },
          "50%": { transform: "translateX(0%)" },
          "75%": { transform: "translateX(-600%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "neon-flicker": {
          "0%, 15%, 23%, 40%, 60%, 80%, 100%": {
            textShadow: "0 0 10px #FF35F9",
          },
          "18%, 35%, 55%, 75%": {
            textShadow: "0 0 1px #FF35F9",
          },
        },
        "neon-glow": {
          "0%, 15%, 23%, 40%, 60%, 80%, 100%": {
            filter: "drop-shadow(0 0 10px #FF35F9) drop-shadow(0 0 20px #9A35FF)",
          },
          "18%, 35%, 55%, 75%": {
            filter: "drop-shadow(0 0 2px #FF35F9) drop-shadow(0 0 5px #9A35FF)",
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
        "spin-bottom": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
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
        "meteor-fall": {
          "0%": { transform: "translateY(-10vh) translateX(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(100vh) translateX(-30vw) scale(0.5)", opacity: "0" },
        },
      },
      animation: {
        "move-side": "move-side 5s ease-in-out infinite",
        "neon-flicker": "neon-flicker 3s infinite",
        "meteor-fall": "meteor-fall infinite",
        spin: "spin 8s linear infinite",
        "spin-bottom": "spin-bottom 8s linear infinite",
        fadeout: "fadeout 1s",
      },
    },
  },
  plugins: [],
};
