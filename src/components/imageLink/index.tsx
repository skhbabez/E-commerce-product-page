import type { ComponentProps, PropsWithChildren } from "react";
import styles from "./ImageLink.module.css";

// https://stackoverflow.com/questions/43230765/typescript-react-access-component-property-types

const ImageLink = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<"a">>) => {
  return (
    <a className={styles.imagelink} {...props}>
      {children}
    </a>
  );
};

export default ImageLink;
