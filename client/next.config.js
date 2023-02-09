/** @type {import('next').NextConfig} */
// import path

const nextConfig = {
  reactStrictMode: true,
  runtime:"edge",
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
