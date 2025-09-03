import Header from "./components/header";
import { UserCtx, UserCtxProvider } from "./context/userContext";

function App() {
  return (
    <UserCtxProvider>
      <Header></Header>
      <main></main>
    </UserCtxProvider>
  );
}

export default App;
