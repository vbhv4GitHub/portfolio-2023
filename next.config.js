/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextWithContentLayer = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextWithContentLayer);
