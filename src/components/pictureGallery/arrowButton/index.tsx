import type { ComponentProps } from "react";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/ArrowRight";
import styles from "./ArrowButton.module.css";

interface ArrowButtonProps extends ComponentProps<"button"> {
  variant: "left" | "right";
}

const ArrowButton = ({ variant, className, ...props }: ArrowButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      aria-label={variant === "left" ? "previous image" : "next image"}
      {...props}
    >
      {variant === "left" ? <LeftArrow /> : <RightArrow />}
    </button>
  );
};
export default ArrowButton;
