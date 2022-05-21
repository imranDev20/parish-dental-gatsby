let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#25277e",
          dark: "#011a5e",
        },
        secondary: "#ea580c",
        background: "#EEF7FF",
        backgroundSecondary: "#f7f7f7",
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
