/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BASE_URL:'https://portfolio-alpha-steel-29.vercel.app/'
  },
  images: {
    domains: ['cdn.sanity.io'],
    },
}

module.exports = nextConfig
