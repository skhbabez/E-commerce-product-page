import Trash from "../icons/Trash";
import styles from "./CartItem.module.css";

interface CartItemProps {
  id: number;
  image: string;
  price: number;
  name: string;
  quantity: number;
  onDelete: (id: number) => void;
}

const CartItem = ({
  id,
  image,
  price,
  name,
  quantity,
  onDelete,
}: CartItemProps) => {
  return (
    <div className={styles.cartitem}>
      <img className={styles.productimage} src={image} alt="" />
      <div>
        <p>{name}</p>
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
