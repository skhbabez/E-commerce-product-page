import styles from "./PriceLabel.module.css";

interface PriceLabelProps {
  price: number;
  discount: number;
}

const PriceLabel = ({ price, discount }: PriceLabelProps) => {
  const discountedPrice = (price * discount).toFixed(2);
  return (
    <div className={styles.wrapper}>
      <p className={styles.discountedprice}>
        <data value={discountedPrice}>${discountedPrice}</data>
      </p>
      <p className={styles.discount}>{Math.floor(discount * 100)}%</p>
      <s className={styles.price}>${price.toFixed(2)}</s>
    </div>
  );
};

export default PriceLabel;
