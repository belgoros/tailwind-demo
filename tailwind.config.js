const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      backgroundColor: ["responsive", "hover", "focus", "active"]
    },
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/custom-forms")],
};
