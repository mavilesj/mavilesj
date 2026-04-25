import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/mavilesj",
  assetPrefix: "/mavilesj/",
};

export default nextConfig;
