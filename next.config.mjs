/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental CSS optimization that requires critters
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;
