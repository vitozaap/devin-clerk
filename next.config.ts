import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server load its scripts through the public link from `npm run share`.
  allowedDevOrigins: ["*.trycloudflare.com"],
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
