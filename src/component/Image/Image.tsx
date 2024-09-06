import React, { FC } from "react";

type ImageProps = {
  url: string;
};

const Image: FC<ImageProps> = ({ url }) => {
  return (
    <div className="flex-shrink-0 w-[33%] h-40 p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-[-7deg]">
      <img
        src={url}
        alt="carousel item"
        className="space-x-4 object-cover w-full h-full rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default Image;
