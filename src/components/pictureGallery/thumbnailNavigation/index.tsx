import styles from "./ThumbnailNavigation.module.css";
import type { Image } from "../../../types";
import { useId, type ComponentProps } from "react";

interface ThumbnailNavigationProps extends ComponentProps<"fieldset"> {
  images: Image[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  name?: string;
}

const ThumbnailNavigation = ({
  images,
  currentIndex,
  setCurrentIndex,
  name,
  className,
  ...props
}: ThumbnailNavigationProps) => {
  const id = useId();
  return (
    <fieldset
      className={`${styles.thumbnailnavigation} ${className}`}
      {...props}
    >
      <legend className="sr-only">Productimages</legend>
      {images.map((image, index) => (
        <label key={image.id}>
          <input
            type="radio"
            name={name || id}
            checked={currentIndex === index}
            onChange={() => setCurrentIndex(index)}
          />
          <img src={image.thumbnail} alt={image.alt}></img>
        </label>
      ))}
    </fieldset>
  );
};

export default ThumbnailNavigation;
