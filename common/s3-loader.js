export const s3Loader = ({ src, width, quality }) => {
  return `https://smokebbq-images.s3.ap-southeast-1.amazonaws.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};
