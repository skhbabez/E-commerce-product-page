import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { UserCtxProvider } from "./context/userContext";
import { CartCtxProvider } from "./context/cartContext";
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserCtxProvider>
      <CartCtxProvider initialValue={[]}>
        <RouterProvider router={router} />
      </CartCtxProvider>
    </UserCtxProvider>
    {/* <App /> */}
  </StrictMode>
);
