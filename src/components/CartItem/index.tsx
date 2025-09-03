import Trash from "../icons/Trash";
import styles from "./CartItem.module.css";

interface CartItemProps {
  id: number;
  imageUrl: string;
  imageAlt: string;
  price: number;
  productName: string;
  quantity: number;
  onDelete: (id: number) => void;
}

const CartItem = ({
  id,
  imageUrl,
  imageAlt,
  price,
  productName,
  quantity,
  onDelete,
}: CartItemProps) => {
  return (
    <div className={styles.cartitem}>
      <img className={styles.productimage} src={imageUrl} alt={imageAlt} />
      <div>
        <p>{productName}</p>
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
