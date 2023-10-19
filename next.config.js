const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      '64.media.tumblr.com',
      'storage.googleapis.com',
      'media.tenor.com'
    ]
  }
}

module.exports = withMDX(nextConfig)
