import { useContext, useId, useState } from "react";
import Button from "../../components/button";
import ShoppingCart from "../../components/icons/ShoppingCart";
import PriceLabel from "../../components/priceLabel";
import SpinButton from "../../components/spinbutton";
import type { Product } from "../../types";
import styles from "./ProductPage.module.css";
import { CartCtx } from "../../context/cartContext";

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const { cart, addItem } = useContext(CartCtx);
  const [quantity, setQuantity] = useState(1);
  const id = useId();
  const updateCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity: quantity,
      price: product.price,
      image: "",
    });
  };
  return (
    <article>
      <div>image gallery</div>
      <form noValidate>
        <hgroup>
          <p>{product.brand}</p>
          <h1>{product.name}</h1>
        </hgroup>

        <p>{product.description}</p>

        <PriceLabel
          price={product.price}
          discount={product.discount}
        ></PriceLabel>
        <Button onClick={updateCart}>
          <ShoppingCart></ShoppingCart> Add to cart
        </Button>
        <p id={id} className="sr-only">
          Quantity
        </p>
        <SpinButton
          value={quantity}
          min={1}
          max={10}
          labelledBy={id}
          onClick={setQuantity}
        ></SpinButton>
      </form>
    </article>
  );
};

export default ProductPage;
