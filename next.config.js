/** @type {import('next').Config} */
const nextConfig = {
  output: 'export', // Outputs a 'out' folder instead of '.next'
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization API
  },
  // basePath: '/your-repository-name', // Uncomment if your site is NOT a user/organization site (e.g., username.github.io/repo-name)
};

module.exports = nextConfig;
