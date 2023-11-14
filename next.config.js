/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,    // Enable Server Actions
},
  images: {
    domains: [
      "utfs.io"
    ]
  }
}

module.exports = nextConfig
