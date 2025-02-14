/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
            }
        ]
    },
    output: "export"
};

export default nextConfig;
