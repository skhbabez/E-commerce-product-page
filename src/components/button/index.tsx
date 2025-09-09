import type { ComponentProps, PropsWithChildren } from "react";
import styles from "./Button.module.css";

// https://www.totaltypescript.com/react-component-props-type-helper
const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"button">>) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
