import type { ComponentProps } from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ alt, ...props }: ComponentProps<"img">) => {
  return <img className={styles.avatar} alt={alt || ""} {...props} />;
};

export default Avatar;
