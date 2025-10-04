// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile packages that might cause issues with module resolution or loading order
  transpilePackages: [
    "react-slick", 
    "slick-carousel",
    // 💥 CRITICAL ADDITION
    "@tailwindcss/postcss", 
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', 
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;