/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },

    ],
  },
 sassOptions:{
  includePaths: [path.join(__dirname, 'styles')],
 }
  
}

module.exports = nextConfig
