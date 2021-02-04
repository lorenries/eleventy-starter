module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/assets/js/**/*.js",
    "./src/**/*.njk",
    "./src/**/*.md",
    "./src/**/*.html",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
