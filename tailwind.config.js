/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['pages/**/*', 'components/**/*'],
  future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true },
  purge: false,
  theme: { extend: { typography: { DEFAULT: { css: { pre: {} } } } } },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
