import ShoppingCart from "../icons/ShoppingCart";
import styles from "./CartLabel.module.css";

interface CartLabelProps {
  items: number;
}

const CartLabel = ({ items }: CartLabelProps) => {
  return (
    <div className={styles.label}>
      {!!items && <output aria-label="items in cart">{items}</output>}
      <ShoppingCart />
    </div>
  );
};

export default CartLabel;
