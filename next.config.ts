import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'figma-alpha-api.s3.us-west-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3-us-west-2.amazonaws.com',
        pathname: '/figma-alpha-api/**',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
