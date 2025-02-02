/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.vercel/output',
  generateBuildId: async () => {
    return 'build'
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
}

export default nextConfig
