/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // first host
        port: '', 
        pathname: '/**', // allow all paths
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // second host
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'www.pexels.com', // second host
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
