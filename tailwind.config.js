/** @type {import('tailwindcss').Config} */

module.exports = {
  variants: {},
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            code: {
              fontSize: '1rem',
              fontWeight: 500,
              color: '#fef3c7',
            },
            a: {
              fontWeight: 500,
              color: '#93c5fd',
              textDecoration: 'none',
              transition: 'color 100ms ease-in',
            },
            'a:hover': { color: '#bfdbfe' },
          },
        },
      },
    },
  },
  content: ['app/**/*', 'components/**/*'],
  plugins: [require('@tailwindcss/typography')],
  future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true },
};
