"use client";

import Image, { StaticImageData } from "next/image";

interface ImageBoxProps {
  image: StaticImageData;
}

const ImageBox: React.FC<ImageBoxProps> = ({ image }) => {
  return (
    <div className="w-[256px] h-[464px] rounded-md overflow-hidden">
      <Image src={image} alt="img" />
    </div>
  );
};

export default ImageBox;
