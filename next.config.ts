/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    },
    eslint: {
    ignoreDuringBuilds: true, // IGNORE ESLINT DURING DEPLOYMENT
  },
};

export default nextConfig;