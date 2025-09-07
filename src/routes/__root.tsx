import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../layouts/header";

const RootLayout = () => (
  <>
    <div className="appwrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
