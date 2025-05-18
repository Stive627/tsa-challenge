/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'blackgoldapi.tsasoft.com',
            port: '',
            pathname: '/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'tsa-challenges.s3.ap-south-1.amazonaws.com',
            port: '',
            pathname: '/**',
            search: '',
          }
        ],
      },
};

export default nextConfig;
