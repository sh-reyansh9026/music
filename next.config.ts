import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: "export", // Enables static export
  basePath: "/music", // Replace with your GitHub repo name
  images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    },
};

module.exports = nextConfig;
