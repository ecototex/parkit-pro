import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/parkit-pro',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
