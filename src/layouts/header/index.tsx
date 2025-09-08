import { useContext, useId, useRef } from "react";
import { UserCtx } from "../../context/userContext";
import Cart from "../../components/cart";
import styles from "./Header.module.css";
import CartLabel from "../../components/cartLabel";
import { CartCtx } from "../../context/cartContext";
import { Link, useLocation } from "@tanstack/react-router";
import Menu from "../../components/icons/menu";
import Close from "../../components/icons/Close";

const Header = () => {
  const { user } = useContext(UserCtx);
  const { cart, removeItem, emptyCart } = useContext(CartCtx);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const id = useId();
  const location = useLocation();
  const currentPath = location.pathname?.split("/").slice(-1)[0];
  console.log(currentPath);
  const amount = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const onPurchase = () => {
    window.alert("Purchase Successful");
    emptyCart();
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headercontent}>
          <nav className={styles.navigation}>
            <div className={styles.menunavigation}>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label="show navigation"
                onClick={() => dialogRef.current?.showModal()}
              >
                <Menu />
              </button>
              <a href="#" className={styles.logo}>
                <img src="images\logo.svg" alt="Home"></img>
              </a>
            </div>
            <div className={styles.mainnavigation}>
              <a href="#">Collections</a>
              <Link
                to="/men"
                className={currentPath === "men" ? styles.selected : ""}
              >
                Men
              </Link>
              <Link
                className={currentPath === "women" ? styles.selected : ""}
                to="/women"
              >
                Women
              </Link>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </nav>

          <div className={styles.usersection}>
            <button className={styles.shopbutton} popoverTarget={id}>
              <CartLabel items={amount} />
            </button>
            <a className={styles.avatarlink} href="#">
              <img alt="User Avatar" src={user.avatar}></img>
            </a>
          </div>
        </div>
        <div popover="auto" id={id} className={styles.popover}>
          <Cart
            cart={cart}
            onDelete={removeItem}
            onPurchase={onPurchase}
          ></Cart>
        </div>
      </header>
      <dialog ref={dialogRef} className={styles.navigationdialog}>
        <nav>
          <button
            type="button"
            aria-label="close dialog"
            onClick={() => dialogRef.current?.close()}
          >
            <Close />
          </button>
          <a href="#">Collections</a>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </dialog>
    </>
  );
};

export default Header;
