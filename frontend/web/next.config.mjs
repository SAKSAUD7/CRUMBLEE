/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Enables static export
    images: {
        unoptimized: true, // Required for static export (Next.js Image Optimization needs a server)
    },
};

export default nextConfig;
