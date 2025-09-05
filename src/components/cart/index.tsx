import Button from "../button";
import styles from "./Cart.module.css";

import CartItem from "../CartItem";
import type { CartItem as Item } from "../../types";

interface CartProps {
  cart: Item[];
  onDelete: (id: number) => void;
}

const Cart = ({ cart, onDelete }: CartProps) => {
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <CartItem {...item} onDelete={onDelete} />
              </li>
            ))}
          </ul>
          <Button>Checkout</Button>
        </>
      ) : (
        <p className={styles.emptymessage}>Your cart is empty.</p>
      )}
    </div>
  );
};
export default Cart;
