import { useContext, useId } from "react";
import { UserCtx } from "../../context/userContext";
import Cart from "../../components/cart";
import styles from "./Header.module.css";
import CartLabel from "../../components/cartLabel";
import { CartCtx } from "../../context/cartContext";
import { Link, useLocation } from "@tanstack/react-router";

const Header = () => {
  const { user } = useContext(UserCtx);
  const { cart, removeItem } = useContext(CartCtx);
  const id = useId();
  const location = useLocation();
  const currentPath = location.pathname;
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
              <Link
                to="/men"
                className={currentPath === "/men" ? styles.selected : ""}
              >
                Men
              </Link>
              <Link
                className={currentPath === "/women" ? styles.selected : ""}
                to="/women"
              >
                Women
              </Link>
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
