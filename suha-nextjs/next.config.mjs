const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/frontend' : '',
    basePath: isProd ? '/frontend' : '',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
