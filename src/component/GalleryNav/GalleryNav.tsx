import React, { FC, useState} from "react";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ImageGallery from "../ImageGallery/ImageGallery";

const GalleryNav: FC = () => {
  const [imageUrls, setImageUrls] = useState([
    "https://i.pinimg.com/564x/a5/b3/ac/a5b3acf913bbf6683503df211da0e9d0.jpg",
    "https://i.pinimg.com/736x/db/07/1b/db071b823508371d69de8e32ead9d8d4.jpg",
    "https://i.pinimg.com/736x/75/77/70/757770c5b5b29ef89decb57978818e37.jpg",
    "https://i.pinimg.com/564x/ff/da/c6/ffdac619c139d7bd60253550a131fea4.jpg",
    "https://i.pinimg.com/736x/db/07/1b/db071b823508371d69de8e32ead9d8d4.jpg",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [image, setImage] = useState(null);
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    const imagetoshow = 3;
    if (currentIndex < imageUrls.length - imagetoshow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // const handleUpload = async () => {
  //   if (!image) return;

  //   const formData = new FormData();
  //   formData.append('file', image);
  //   formData.append('upload_preset', 'your-upload-preset'); // Replace with your upload preset

  //   try {
  //     const response = await axios.post('https://api.cloudinary.com/v1_1/dpdmheubq/image/upload', formData);
  //     const newImageUrl = response.data.secure_url;
  //     setImageUrls(prevUrls => [...prevUrls, newImageUrl]);
  //     setImage(null);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  // const handleAddImageClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   } else {
  //     console.error("File input reference is not defined.");
  //   }
  // };

  return (
    <div className="flex flex-col">
      <div className="flex h-[50%]">
        <div className="left flex flex-1 mt-2">
          <div className="GalleryIcon h-[80%] w-2/5 m-2 rounded-2xl bg-custom-navbar text-white flex justify-center items-center ">
            Gallery
          </div>
        </div>

        <div className="right flex flex-1 justify-start items-center h-full">
          <div className="addImg flex w-2/5 xl:w-3/5 h-3/5 m-2 p-2 bg-custom-addimg shadow-top-black-bottom-white justify-center items-center rounded-3xl text-white cursor-pointer">
            <FaPlus />
            <h6 className="ml-1 text-xs">ADD IMAGE</h6>

            <button className="hidden">Upload</button>
          </div>

          <div className="navIcon flex  m-3">
            <div
              className="leftarrow p-2 bg-custom-navbar rounded-full text-white m-2 p-2 shadow-top-light-blue "
              onClick={handleLeftClick}
            >
              <FaArrowLeft />
            </div>
            <div
              className="rightarrow p-2 bg-custom-navbar rounded-full text-white m-2 p-2 shadow-top-light-blue"
              onClick={handleRightClick}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70%]">
        <ImageGallery currentIndex={currentIndex} imageUrls={imageUrls} />
      </div>
    </div>
  );
};

export default GalleryNav;
