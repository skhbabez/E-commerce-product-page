import styles from "./PictureGallery.module.css";
import type { Image } from "../../types";
import { useRef, useState } from "react";
import ThumbnailNavigation from "./thumbnailNavigation";
import Close from "../icons/Close";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/ArrowRight";
import ArrowButton from "./arrowButton";

interface PictureGalleryProps {
  images: Image[];
}

const PictureGallery = ({ images }: PictureGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  if (images.length <= 0) {
    return <div>no images</div>;
  }
  const showLightbox = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const closeLightbox = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const onPrevClick = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };
  const onNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const currentImage = images[currentIndex];
  return (
    <>
      <div className={styles.embeddedgallery}>
        <div className={styles.currentimage}>
          <div className={styles.navigation}>
            <ArrowButton
              variant="left"
              type="button"
              aria-label="previous image"
              onClick={onPrevClick}
            >
              <LeftArrow />
            </ArrowButton>
            <ArrowButton
              variant="right"
              type="button"
              aria-label="next image"
              onClick={onNextClick}
            >
              <RightArrow />
            </ArrowButton>
          </div>

          {/* how to make this meaningufully accessible? */}
          <button
            type="button"
            onClick={showLightbox}
            aria-label="open lightbox gallery"
            aria-haspopup="dialog"
          >
            <img src={currentImage.image} alt={currentImage.alt} />
          </button>
        </div>
        <ThumbnailNavigation
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          name="embedded"
        />
      </div>

      <dialog className={styles.lightboxdialog} ref={dialogRef}>
        <div className={styles.lightboxgallery}>
          <button
            className={styles.closebutton}
            aria-label="close lightbox"
            onClick={closeLightbox}
          >
            <Close />
          </button>
          <div className={styles.currentimage}>
            <div className={styles.navigation}>
              <ArrowButton
                variant="left"
                type="button"
                aria-label="previous image"
                onClick={onPrevClick}
              >
                <LeftArrow />
              </ArrowButton>
              <ArrowButton
                variant="right"
                type="button"
                aria-label="next image"
                onClick={onNextClick}
              >
                <RightArrow />
              </ArrowButton>
            </div>
            <img src={currentImage.image} alt={currentImage.alt}></img>
          </div>

          <ThumbnailNavigation
            className={styles.thumbnailwrapper}
            images={images}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            name="lightbox"
          />
        </div>
      </dialog>
    </>
  );
};

export default PictureGallery;
