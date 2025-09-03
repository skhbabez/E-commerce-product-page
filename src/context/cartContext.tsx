import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { CartItem } from "../types";

interface CartCtxType {
  cart: CartItem[];
  setItem: (cartItem: CartItem) => void;
  removeItem: (id: number) => void;
}

const defaultCart: CartItem[] = [];

const CartCtx = createContext<CartCtxType>({
  cart: defaultCart,
  setItem: () => {},
  removeItem: () => {},
});

const CartCtxProvider = ({
  initialValue,
  children,
}: PropsWithChildren<{ initialValue: CartItem[] }>) => {
  const [cart, setCart] = useState<CartItem[]>(initialValue);

  //add localstorage. Maybe external syncstore?

  const setItem = (cartItem: CartItem) => {
    const newCart = [
      ...cart.filter((item) => cartItem.id !== item.id),
      cartItem,
    ];
    setCart(newCart);
  };

  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => id !== item.id);
    setCart(newCart);
  };
  const value = useMemo(
    () => ({
      cart,
      setItem,
      removeItem,
    }),
    [cart, setCart]
  );
  return <CartCtx value={value}> {children}</CartCtx>;
};

export { CartCtx, CartCtxProvider };
