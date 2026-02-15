import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/jordan-and-courtney-delks", destination: "/about", permanent: true },
      { source: "/getbetter", destination: "/get-better", permanent: true },
      { source: "/train", destination: "/services", permanent: true },
      { source: "/mindset", destination: "/services", permanent: true },
      { source: "/contact", destination: "/book-session", permanent: true },
      { source: "/book-a-session", destination: "/book-session", permanent: true },
      { source: "/library-resources", destination: "/library", permanent: true },
      { source: "/speaking-events", destination: "/engage", permanent: true }
    ];
  }
};

export default nextConfig;
