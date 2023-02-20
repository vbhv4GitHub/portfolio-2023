const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'tailwindcss',
    ['cssnano', isProduction ? {} : false],
    ['autoprefixer', isProduction ? {} : false],
    [
      '@fullhuman/postcss-purgecss',
      isProduction
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
