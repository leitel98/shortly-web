/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "shortly-web-leitel98.vercel.app/",
        // port: '',
        pathname: './src/**',
      },
    ],
  },
}

module.exports = nextConfig
