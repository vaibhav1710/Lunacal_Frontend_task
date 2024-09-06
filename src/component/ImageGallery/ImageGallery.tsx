// ImageGallery.tsx
import React, { FC } from 'react';
import Image from '../Image/Image';


type ImageGalleryProps= {
    currentIndex:number;
    imageUrls: string[];
}


const ImageGallery: FC<ImageGalleryProps> = ({currentIndex, imageUrls}) => {
  // Sample image URLs
  // const imageUrls = [
  //   'https://i.pinimg.com/736x/75/77/70/757770c5b5b29ef89decb57978818e37.jpg',
  //   'https://i.pinimg.com/564x/a5/b3/ac/a5b3acf913bbf6683503df211da0e9d0.jpg',
  //   'https://i.pinimg.com/564x/ff/da/c6/ffdac619c139d7bd60253550a131fea4.jpg',
  //   'https://i.pinimg.com/564x/6f/a1/3d/6fa13d9200b9c7b673e4a21fd64f031e.jpg',
  //   'https://i.pinimg.com/736x/db/07/1b/db071b823508371d69de8e32ead9d8d4.jpg',
  // ];


  return (
    <div className="relative w-full mr-4  flex items-center">

      {/* Images Container */}
      <div className="flex overflow-hidden w-[100%] h-[70%]">
        <div
          className="flex transition-transform duration-300"
          style = {{  transform: `translateX(-${currentIndex * (33.33)}%)`
        }}>
          {imageUrls.map((url, index) => (
            <Image key={index} url={url} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ImageGallery;
