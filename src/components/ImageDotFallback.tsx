import { useState } from "react";
import Image from "next/image";

const ImageWithDotFallback = (props: React.ComponentProps<typeof Image>) => {
  const [imageBroken, setImageBroken] = useState(false);
  const { src, alt, width, height, className, ...restProps } = props;

  const handleImageError = () => {
    setImageBroken(true);
  };

  if (imageBroken) {
    return <div style={{ width: `${width}px`, height: `${height}px` }} className={`bg-blue-500 rounded-full ${className}`}></div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleImageError}
      {...restProps}
    />
  );
};

export default ImageWithDotFallback;