/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		iconSizes: [],
		domains: ["images.unsplash.com","static.ghost.org"],
		loader: "default",
	},
	webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  output: 'standalone',
}

module.exports = nextConfig
