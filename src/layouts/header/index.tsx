import { useContext, useId, useRef } from "react";
import { UserCtx } from "../../context/userContext";
import Cart from "../../components/cart";
import styles from "./Header.module.css";
import CartLabel from "../../components/cartLabel";
import { CartCtx } from "../../context/cartContext";

// Use A router for next project
const Header = () => {
  const { user } = useContext(UserCtx);
  const { cart, removeItem } = useContext(CartCtx);
  const id = useId();
  const amount = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headercontent}>
          <div className={styles.navigation}>
            <a href="#" className={styles.logo}>
              <img src="images\logo.svg" alt="Home"></img>
            </a>
            <div className={styles.mainnavigation}>
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a className={styles.selected} href="#">
                Women
              </a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className={styles.usersection}>
            <button className={styles.shopbutton} popoverTarget={id}>
              <CartLabel items={amount} />
            </button>
            <a className={styles.avatarlink} href="#">
              <img alt="User Avatar" src={user.avatar}></img>
            </a>
          </div>
        </div>
      </header>
      <div popover="auto" id={id} className={styles.popover}>
        <Cart cart={cart} onDelete={removeItem}></Cart>
      </div>
    </>
  );
};

export default Header;
