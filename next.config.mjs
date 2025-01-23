  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'bento.doankiet.pro',
          pathname: '**',
        }
      ],
    },
    output: 'standalone',
  };

  export default nextConfig;
