module.exports = {
  content: ['pages/**/*', 'components/**/*'],
  future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true },
  purge: false,
  theme: { extend: {} },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
