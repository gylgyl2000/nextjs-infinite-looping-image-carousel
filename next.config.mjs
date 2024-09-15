/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nextjs-infinite-looping-image-carousel",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
