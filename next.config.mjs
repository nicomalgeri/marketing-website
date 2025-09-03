/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/marketing-website',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/marketing-website',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
