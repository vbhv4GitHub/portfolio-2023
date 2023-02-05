/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextWithContentLayer = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: { formats: ['image/avif', 'image/webp'] },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextWithContentLayer);
