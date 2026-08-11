/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    serverExternalPackages: [
    "@sparticuz/chromium",
    "puppeteer-core",
  ],
   async redirects() {
    return [
      {
        source: "/features",
        destination: "/solutions/employer/easy-calibrator",
        permanent: true,
      },

    ];
  },
     experimental: {
    esmExternals: true,
    swcPlugins: [],
  },
   outputFileTracingIncludes: {
      "/api/export-pdf": [
        "./node_modules/@sparticuz/chromium/bin/**/*",
      ],
    },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig
