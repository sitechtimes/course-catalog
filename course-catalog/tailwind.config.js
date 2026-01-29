/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1740",
    },
    borderRadius: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
    },
    extend: {
      colors: {
        "primary-s": "#A3C2DF",
        "secondary-s": "#334867",
        "tertiary-s": "#E9F0FA",
        "other-s": "#c1d6eb",
        "primary-g": "#C5D4A4",
        "secondary-g": "#49623C",
        "tertiary-g": "#EDFBE2",
        primary: {
          DEFAULT: "#A3C2DF",
          light: "#c1d6eb",
          lighter: "#E9F0FA",
          dark: "#7ba3c9",
        },
        secondary: {
          DEFAULT: "#334867",
          light: "#4a6082",
          dark: "#243447",
        },
        accent: {
          DEFAULT: "#49623C",
          light: "#C5D4A4",
        },
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    styled: true,
    base: true,
    utils: true,
  },
};
