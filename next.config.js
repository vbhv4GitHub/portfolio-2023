/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: { missingSuspenseWithCSRBailout: false },
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
