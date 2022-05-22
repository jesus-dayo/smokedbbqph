import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageGallery = ({ images }) => {
  return (
    <Carousel showIndicators={false} showStatus={false}>
      {images?.map((image) => (
        <div key={image.name}>
          <Image
            key={image.name}
            src={image.img}
            alt={image.name}
            width={700}
            height={600}
          />
          <p className="text-white text-center align-middle">{image.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageGallery;
