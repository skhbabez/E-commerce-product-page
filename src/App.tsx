import Header from "./layout/header";
import { CartCtxProvider } from "./context/cartContext";
import { UserCtxProvider } from "./context/userContext";

function App() {
  return (
    <UserCtxProvider>
      <CartCtxProvider initialValue={[]}>
        <Header />
        <main></main>
      </CartCtxProvider>
    </UserCtxProvider>
  );
}

export default App;
