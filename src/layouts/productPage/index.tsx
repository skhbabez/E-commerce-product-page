import { useContext, useState } from "react";
import Button from "../../components/button";
import ShoppingCart from "../../components/icons/ShoppingCart";
import PriceLabel from "../../components/priceLabel";
import SpinButton from "../../components/spinbutton";
import type { Product } from "../../types";
import styles from "./ProductPage.module.css";
import { CartCtx } from "../../context/cartContext";
import PictureGallery from "../../components/pictureGallery";

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const { addItem } = useContext(CartCtx);
  const [quantity, setQuantity] = useState(1);
  const updateCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity: quantity,
      price: product.price * (1 - product.discount),
      image: product.images[0]?.thumbnail,
    });
  };
  return (
    <article className={styles.productpage}>
      <PictureGallery images={product.images} />
      <form noValidate>
        <hgroup className={styles.producttitle}>
          <p>{product.brand}</p>
          <h1>{product.name}</h1>
        </hgroup>

        <p className={styles.productdescription}>{product.description}</p>

        <PriceLabel
          className={styles.pricelabel}
          price={product.price}
          discount={product.discount}
        ></PriceLabel>
        <div className={styles.controls}>
          <SpinButton
            value={quantity}
            min={1}
            max={10}
            label={"       Quantity"}
            onClick={setQuantity}
          ></SpinButton>
          <Button type="button" onClick={updateCart}>
            <ShoppingCart></ShoppingCart> Add to cart
          </Button>
        </div>
      </form>
    </article>
  );
};

export default ProductPage;
