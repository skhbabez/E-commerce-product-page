import Trash from "../icons/Trash";
import styles from "./CartItem.module.css";

interface CartItemProps {
  id: number;
  imageUrl: string;
  imageAlt: string;
  price: number;
  quantity: number;
  onDelete: (id: number) => void;
}

const CartItem = ({
  id,
  imageUrl,
  imageAlt,
  price,
  quantity,
  onDelete,
}: CartItemProps) => {
  return (
    <div className={styles.cartitem}>
      <img className={styles.productimage} src={imageUrl} alt={imageAlt} />
      <div>
        <p>Fall Limited Edition Sneakers</p>
        <div className={styles.prices}>
          <span>
            ${price.toFixed(2)} x {quantity}
          </span>
          <em>${(price * quantity).toFixed(2)}</em>
        </div>
      </div>
      <button
        type="button"
        aria-label="Remove item"
        className={styles.deletebutton}
        onClick={() => onDelete(id)}
      >
        <Trash />
      </button>
    </div>
  );
};

export default CartItem;
