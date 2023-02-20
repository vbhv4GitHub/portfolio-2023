/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: true,
  variants: {},
  theme: { extend: {} },
  content: ['pages/**/*', 'components/**/*'],
  plugins: [require('@tailwindcss/typography')],
  future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true },
};
