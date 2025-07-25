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
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};

export default nextConfig;
