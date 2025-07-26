// next.config.ts

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  poweredByHeader: false, 
};

export default nextConfig;
