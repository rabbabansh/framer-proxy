import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://YOUR-SITE-NAME.framer.website/:path*',
      },
    ];
  },
  // Optional: speeds up Vercel deployments since this is just a proxy
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;