import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'corridaauchan.pt', // exemplo: Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // exemplo: Imgur
      }
    ],
  },
};

export default nextConfig;
