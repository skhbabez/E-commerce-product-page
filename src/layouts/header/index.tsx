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
  // https://stackoverflow.com/questions/25864259/how-to-close-the-new-html-dialog-tag-by-clicking-on-its-backdrop
  const closeNavigationMenuOutside = (
    event: React.MouseEvent<HTMLDialogElement>
  ) => {
    const dialog = dialogRef.current;

    if (dialog) {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        dialog.close();
      }
    }
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headercontent}>
          <nav className={styles.navigation} aria-label="main navigation">
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
            <ul className={styles.mainnavigation}>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <Link
                  to="/men"
                  className={currentPath === "men" ? styles.selected : ""}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  className={currentPath === "women" ? styles.selected : ""}
                  to="/women"
                >
                  Women
                </Link>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className={styles.usersection}>
            <button
              type="button"
              className={styles.shopbutton}
              aria-haspopup="menu"
              aria-label="Open Cart"
              popoverTarget={id}
            >
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
      <dialog
        ref={dialogRef}
        onClick={closeNavigationMenuOutside}
        className={styles.navigationdialog}
      >
        <nav aria-label="open navigation menu">
          <button
            type="button"
            aria-label="close dialog"
            onClick={() => dialogRef.current?.close()}
          >
            <Close />
          </button>
          <ul>
            <li>
              <a autoFocus href="#">
                Collections
              </a>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </dialog>
    </>
  );
};

export default Header;
