/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  experimental: { swcPlugins: [["next-superjson-plugin", {}]] },
};

module.exports = nextConfig;
