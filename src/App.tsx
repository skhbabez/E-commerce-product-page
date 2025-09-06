import { CartCtxProvider } from "./context/cartContext";
import { UserCtxProvider } from "./context/userContext";
import Header from "./layouts/header";
import ProductPage from "./layouts/productPage";
import type { Product } from "./types";

const product: Product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  brand: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 0.5,
  images: [
    {
      id: 1,
      image: "images/image-product-1.jpg",
      thumbnail: "images/image-product-1-thumbnail.jpg",
      alt: "Product picture",
    },
    {
      id: 2,
      image: "images/image-product-2.jpg",
      thumbnail: "images/image-product-2-thumbnail.jpg",
      alt: "Product picture",
    },
    {
      id: 3,
      image: "images/image-product-3.jpg",
      thumbnail: "images/image-product-3-thumbnail.jpg",
      alt: "Product picture",
    },
    {
      id: 4,
      image: "images/image-product-4.jpg",
      thumbnail: "images/image-product-4-thumbnail.jpg",
      alt: "Product picture",
    },
  ],
};

function App() {
  return (
    <UserCtxProvider>
      <CartCtxProvider initialValue={[]}>
        <div className="appwrapper">
          <Header />
          <main>
            <ProductPage product={product}></ProductPage>
          </main>
        </div>
      </CartCtxProvider>
    </UserCtxProvider>
  );
}

export default App;
