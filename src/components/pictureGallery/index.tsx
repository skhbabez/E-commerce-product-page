import styles from "./PictureGallery.module.css";
import type { Image } from "../../types";
import { useState } from "react";
import GalleryNavigation from "./galleryNavigation";

interface PictureGalleryProps {
  images: Image[];
}

const PictureGallery = ({ images }: PictureGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  if (images.length <= 0) {
    return <div>no images</div>;
  }
  const currentImage = images[currentIndex];
  return (
    <div className={styles.gallery}>
      <div className={styles.currentimage}>
        <GalleryNavigation
          className={styles.buttonnavigation}
          onNextClick={() =>
            setCurrentIndex((current) => (current + 1) % images.length)
          }
          onPrevClick={() =>
            setCurrentIndex((current) =>
              current > 0 ? current - 1 : images.length - 1
            )
          }
        />
        <img src={currentImage.image} alt={currentImage.alt}></img>
      </div>
      <fieldset className={styles.thumbnailnavigation}>
        <legend className="sr-only">Productimages</legend>
        {images.map((image, index) => (
          <label key={image.id}>
            <input
              type="radio"
              name="productimage"
              checked={image.id === currentImage.id}
              onChange={() => setCurrentIndex(index)}
            />
            <img src={image.thumbnail} alt={image.alt}></img>
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default PictureGallery;
