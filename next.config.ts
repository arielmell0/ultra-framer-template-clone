import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/About",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/Stack",
        destination: "/stack",
        permanent: false,
      },
      {
        source: "/Contact",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
