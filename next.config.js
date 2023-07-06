/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = {
  ...withNextra(),
  output: "export",
  rewrites: undefined,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = nextConfig;
