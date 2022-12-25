/** @type {import('next').NextConfig} */
const nextConfig = {
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
  output: "standalone",
  reactStrictMode: true,
};

module.exports = nextConfig;
