module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production' ? 'autoprefixer' : null,
    process.env.NODE_ENV === 'production' ? 'cssnano' : null,
    'tailwindcss',
    [
      '@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
            // the paths to all template files
            content: ['./pages/**/*', './components/**/*'],
            // function used to extract class names from the templates
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
