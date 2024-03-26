/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['myanimelist.net'],
    //   },
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'myanimelist.net',
                port: '',
            },
        ],
    },
};

export default nextConfig;
