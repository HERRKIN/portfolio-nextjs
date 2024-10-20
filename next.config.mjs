/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;