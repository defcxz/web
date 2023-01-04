/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/drop',
        destination: 'https://www.dropbox.com/scl/fo/mv8b1k3mku5wru8vvdyci/h?dl=0&rlkey=jr2837i649r3bxiuis52vfvyn',
        permanent: false
      },
    ]
  },
}

module.exports = nextConfig
