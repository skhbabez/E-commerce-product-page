import Cart from "./components/cart";
import Header from "./components/header";
import { CartCtxProvider } from "./context/cartContext";
import { UserCtxProvider } from "./context/userContext";

function App() {
  return (
    <UserCtxProvider>
      <CartCtxProvider initialValue={[]}>
        <Header></Header>
        <main></main>
      </CartCtxProvider>
    </UserCtxProvider>
  );
}

export default App;
