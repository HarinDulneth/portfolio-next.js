import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */
    eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
