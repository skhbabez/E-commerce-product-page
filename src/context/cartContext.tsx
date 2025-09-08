import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { CartItem } from "../types";

interface CartCtxType {
  cart: CartItem[];
  addItem: (cartItem: CartItem) => void;
  removeItem: (id: number) => void;
}

const defaultCart: CartItem[] = [];

const CartCtx = createContext<CartCtxType>({
  cart: defaultCart,
  addItem: () => {},
  removeItem: () => {},
});

const CartCtxProvider = ({
  children,
  initialValue,
}: PropsWithChildren<{ initialValue?: CartItem[] }>) => {
  const getCart = () => {
    const cartString = window.localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : undefined;
  };
  const saveCart = (cart: CartItem[]) => {
    const cartString = JSON.stringify(cart);
    window.localStorage.setItem("cart", cartString);
    console.log(cartString);
    return cart;
  };
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(() => {
      const oldValue = getCart();
      if (!oldValue) {
        saveCart(initialValue || []);
        return initialValue;
      }
      return oldValue;
    });
  }, []);

  // Maybe useExternalSyncstore? Would avoid another context? and make it esier to synchronize across tabs

  const addItem = (cartItem: CartItem) => {
    setCart((oldCart) => {
      const oldIndex = oldCart.findIndex((item) => cartItem.id === item.id);
      const oldQuantity = oldCart[oldIndex]?.quantity || 0;
      const newCartItem = {
        ...cartItem,
        quantity: cartItem.quantity + oldQuantity,
      };
      const newCart = [...oldCart];
      if (oldIndex >= 0) {
        newCart[oldIndex] = newCartItem;
      } else {
        newCart.push(newCartItem);
      }
      saveCart(newCart);
      return newCart;
    });
  };

  const removeItem = (id: number) => {
    setCart((oldCart) => {
      const newCart = oldCart.filter((item) => id !== item.id);
      saveCart(newCart);
      return newCart;
    });
  };
  const value = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
    }),
    [cart, setCart]
  );
  return <CartCtx value={value}> {children}</CartCtx>;
};

export { CartCtx, CartCtxProvider };
