let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#157FB4",
          dark: "#0094A1",
        },
        secondary: "#FF48A4",
        background: "#EBFCFA",
        backgroundSecondary: "#FFF3F9",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("second", "&:nth-child(2)");
      addVariant("third", "&:nth-child(3)");
    }),
  ],
};
