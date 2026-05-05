import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/parkit',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
