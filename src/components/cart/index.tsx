import { useContext } from "react";
import Button from "../button";
import styles from "./Cart.module.css";
import { CartCtx } from "../../context/cartContext";
import CartItem from "../CartItem";

const Cart = () => {
  const { cart, removeItem } = useContext(CartCtx);
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <CartItem {...item} onDelete={removeItem} />
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
