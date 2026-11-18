import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // The Vercel preview domain still gets crawled with old content; send it to the real site.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aadhithya-d.vercel.app" }],
        destination: "https://www.aadhithyad.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
