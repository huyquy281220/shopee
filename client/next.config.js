/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/drtt5mjfe/image/upload/**',
      },
    ],
  }
}

module.exports = nextConfig
