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
  images: [],
};

function App() {
  return (
    <UserCtxProvider>
      <CartCtxProvider initialValue={[]}>
        <Header />
        <main>
          <ProductPage product={product}></ProductPage>
        </main>
      </CartCtxProvider>
    </UserCtxProvider>
  );
}

export default App;
