import withBundledAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['smokebbq-images.s3.ap-southeast-1.amazonaws.com'],
  },
  // images: {
  //   domains: ['placeimg.com', 'maps.gstatic.com'],
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/searchRestaurants',
  //       destination:
  //         'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
  //     },
  //   ];
  // },
};

export default withBundledAnalyzer(
  {
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
  },
  nextConfig
);
