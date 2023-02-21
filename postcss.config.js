const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: ['tailwindcss', ['cssnano', isProduction ? {} : false], ['autoprefixer', isProduction ? {} : false]],
};
