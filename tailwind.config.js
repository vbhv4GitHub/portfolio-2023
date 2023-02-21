/** @type {import('tailwindcss').Config} */

module.exports = {
  variants: {},
  theme: { extend: {} },
  content: ['pages/**/*', 'components/**/*'],
  plugins: [require('@tailwindcss/typography')],
  future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true },
};
