/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
            },
            {
                hostname: "images.pexels.com"
            },
            {
                hostname: "images.unsplash.com"
            },
            {
                hostname: "plus.unsplash.com"
            }
        ],
        // unoptimized: true
    },
    // trailingSlash: true,
    // basePath: "/next-school-web-app"
};

export default nextConfig;
