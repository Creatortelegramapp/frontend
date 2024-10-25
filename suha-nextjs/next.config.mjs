const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/frontend/suha-nextjs/out' : '',
    basePath: isProd ? '/frontend/suha-nextjs/out' : '',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
