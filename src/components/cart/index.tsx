import Button from "../button";
import styles from "./Cart.module.css";

const Cart = () => {
  const items: string[] = ["fsdfsfs", "fdsfdsf"];
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <Button>Checkout</Button>
    </div>
  );
};
export default Cart;
