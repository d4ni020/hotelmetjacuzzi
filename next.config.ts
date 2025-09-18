import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN: 'pk.eyJ1IjoiZGFuaWVsbTg2ZGFuaWVsIiwiYSI6ImNtZmgzcXh3ZzA2amMyanF3MGtjbWFpa2sifQ.a8JrNOMPgc_LzLvT-wU3eQ',
  },
};

export default nextConfig;
