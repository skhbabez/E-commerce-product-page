import type { ComponentProps } from "react";
import styles from "./PriceLabel.module.css";

interface PriceLabelProps extends ComponentProps<"div"> {
  price: number;
  discount: number;
}

const PriceLabel = ({
  price,
  discount,
  className,
  ...props
}: PriceLabelProps) => {
  const discountedPrice = (price * discount).toFixed(2);
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <p className={styles.discountedprice}>
        <data value={discountedPrice}>${discountedPrice}</data>
      </p>
      <p className={styles.discount}>{Math.floor(discount * 100)}%</p>
      <s className={styles.price}>${price.toFixed(2)}</s>
    </div>
  );
};

export default PriceLabel;
