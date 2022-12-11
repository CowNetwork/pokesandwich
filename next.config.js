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
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'pokewiki.de',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
