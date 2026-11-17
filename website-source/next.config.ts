import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: { tsconfigPath: "tsconfig.github.json" },
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
