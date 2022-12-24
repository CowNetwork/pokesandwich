/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pokewiki.de',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'pokewiki.de',
        pathname: '/images/**',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
