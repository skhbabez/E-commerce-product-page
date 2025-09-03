import { useContext, useId } from "react";
import Button from "../button";
import styles from "./Cart.module.css";
import { CartCtx } from "../../context/cartContext";
import CartItem from "../CartItem";
import ShoppingCart from "../icons/ShoppingCart";

const Cart = () => {
  const { cart, removeItem } = useContext(CartCtx);
  const id = useId();
  return (
    <>
      <button className={styles.shopbutton}  popoverTarget={id}>
        <ShoppingCart />
      </button>
      <div className={styles.popover} popover="auto" id={id}>
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
      </div>
    </>
  );
};
export default Cart;
