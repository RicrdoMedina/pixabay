import React from "react";

type Source = {
  srcSet: string;
  media: string;
}

type ResponsivePictureProps = {
  sources: Source[];
  imgSrc: string;
  alt: string;
  className?: string;
}

const ResponsivePicture: React.FC<ResponsivePictureProps> = ({
  sources,
  imgSrc,
  alt,
  className = "",
}) => {
  return (
    <picture>
      {sources.map((source, index) => (
        <source key={index} srcSet={source.srcSet} media={source.media} />
      ))}
      <img src={imgSrc} className={`w-full h-full object-cover absolute ${className}`} alt={alt} />
    </picture>
  );
};

export default ResponsivePicture;
