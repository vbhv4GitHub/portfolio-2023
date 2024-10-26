/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
