/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
            }
        ],
        // unoptimized: true
    },
    // trailingSlash: true,
    // basePath: "/next-school-web-app"
};

export default nextConfig;
