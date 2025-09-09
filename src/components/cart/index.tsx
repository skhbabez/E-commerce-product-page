import Button from "../button";
import styles from "./Cart.module.css";

import CartItem from "./CartItem";
import type { CartItem as Item } from "../../types";
import type { ComponentProps } from "react";

interface CartProps extends ComponentProps<"div"> {
  cart: Item[];
  onDelete: (id: number) => void;
  onPurchase: () => void;
}

const Cart = ({
  cart,
  onDelete,
  onPurchase,
  className,
  ...props
}: CartProps) => {
  return (
    <article className={`${styles.cart} ${className}`} {...props}>
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
          <Button onClick={onPurchase}>Checkout</Button>
        </>
      ) : (
        <p className={styles.emptymessage}>Your cart is empty.</p>
      )}
    </article>
  );
};
export default Cart;
