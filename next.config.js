/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
		workerThreads: false,
		cpus: 1,
	},
	images: {
		domains: ["media.graphassets.com", "naszsklep-api.vercel.app"],
	},
	redirects: async () => {
		return [
			{
				source: "/old_category/t-shirts",
				destination: "/old_category/t-shirts/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
