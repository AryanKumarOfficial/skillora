/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
            }
        ],
        unoptimized: true
    },
    trailingSlash: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/",
};

export default nextConfig;
