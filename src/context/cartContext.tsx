import {
  createContext,
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
  initialValue,
  children,
}: PropsWithChildren<{ initialValue: CartItem[] }>) => {
  const [cart, setCart] = useState<CartItem[]>(initialValue);

  //add localstorage. Maybe external syncstore?

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
      return newCart;
    });
  };

  const removeItem = (id: number) => {
    setCart((oldCart) => oldCart.filter((item) => id !== item.id));
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
