import type { ComponentProps } from "react";
import RightArrow from "../../icons/ArrowRight";
import LeftArrow from "../../icons/LeftArrow";
import styles from "./GalleryNavigation.module.css";

interface GalleryNavigationProps extends ComponentProps<"div"> {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const GalleryNavigation = ({
  onPrevClick,
  onNextClick,
  className,
  ...props
}: GalleryNavigationProps) => {
  return (
    <div className={`${styles.navigation} ${className}`} {...props}>
      <button type="button" aria-label="previous image" onClick={onPrevClick}>
        <LeftArrow />
      </button>
      <button type="button" aria-label="next image" onClick={onNextClick}>
        <RightArrow />
      </button>
    </div>
  );
};

export default GalleryNavigation;
