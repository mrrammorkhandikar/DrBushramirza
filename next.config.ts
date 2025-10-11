// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Transpile packages that might cause issues with module resolution or loading order
  transpilePackages: [
    "react-slick", 
    "slick-carousel",
    // 💥 CRITICAL ADDITION
    "@tailwindcss/postcss", 
  ],

  images: {
    // 💥 CRITICAL CHANGE: This disables Next.js Image Optimization features
    // When output: 'export' is used, this makes Next.js output standard <img> tags
    // that link directly to your static image files (e.g., /Images/General/TheToothLogo2.png).
    unoptimized: true, 
    
    // You can keep remotePatterns if you have external images, but they are not strictly needed 
    // for local static images after setting unoptimized: true.
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