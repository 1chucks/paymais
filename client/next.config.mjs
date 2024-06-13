import withSerwistInit from "@serwist/next"

/** @type {import('next').NextConfig} */

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts", // where the service worker src is
  swDest: "public/sw.js", // where the service worker code will end up
})

const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push("pino-pretty", "lokijs", "encoding")
    return config
  },
}

export default withSerwist({
  // Next.js config options
  nextConfig,
})

// next.config.mjs
