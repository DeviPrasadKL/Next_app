/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.myanimelist.net'],
      },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: "cdn.myanimelist.net",
    //             port: '',
    //         },
    //     ],
    // },
};

export default nextConfig;
