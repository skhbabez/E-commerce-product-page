import styles from "./PictureGallery.module.css";
import type { Image } from "../../types";
import { useState } from "react";

interface PictureGalleryProps {
  images: Image[];
}

const PictureGallery = ({ images }: PictureGalleryProps) => {
  const [currentImageId, setCurrentImageId] = useState<number | null>(
    images[0]?.id || null
  );
  const getImage = (id: number | null) => {
    return images.find((image) => image.id === id);
  };
  const handleChange = (id: number) => {
    setCurrentImageId(getImage(id)?.id || null);
  };
  const currentImage = getImage(currentImageId);
  if (!currentImage) {
    return <div>no images</div>;
  }
  return (
    <div>
      <img src={currentImage.image} alt={currentImage.alt}></img>
      <fieldset>
        <legend className="sr-only">Productimages</legend>
        {images.map((image) => (
          <label key={image.id}>
            <input
              type="radio"
              name="productimage"
              checked={image.id === currentImage.id}
              onChange={() => handleChange(image.id)}
            />
            <img src={image.thumbnail} alt={image.alt}></img>
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default PictureGallery;
