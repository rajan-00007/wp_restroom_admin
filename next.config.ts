import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Required for Capacitor
  images: {
    unoptimized: true // Required for local images to load
  }
};

export default nextConfig;
