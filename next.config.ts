import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
