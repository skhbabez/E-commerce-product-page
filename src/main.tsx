import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createHashHistory,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { UserCtxProvider } from "./context/userContext";
import { CartCtxProvider } from "./context/cartContext";
// https://tanstack.com/router/latest/docs/framework/solid/guide/history-types
const hashHistory = createHashHistory();
const router = createRouter({
  routeTree,
  basepath: "/E-commerce-product-page/",
  history: hashHistory,
});
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
