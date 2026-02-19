/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable build caching for faster rebuilds
  experimental: {
    // Optimize build performance
    optimizeCss: true,
  },
  
  // TypeScript configuration
  typescript: {
    // Consider removing ignoreBuildErrors in production for better type safety
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Set to false if using Next.js Image component with optimization
  },
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Output configuration for static export (if deploying as static site)
  // Uncomment if you need static export:
  // output: 'export',
  
  // Optimize bundle size
  swcMinify: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

export default nextConfig
