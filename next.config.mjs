/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'robohash.org',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
