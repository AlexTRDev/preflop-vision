import { NavLink } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout, PreflopVisionLayout } from "../Layouts";
import { Outlet } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <div>
              <NavLink to="/preflop-vision">Preflop Vision</NavLink>
              {/* <NavLink to="/admin">Administrador</NavLink> */}
            </div>
            <Outlet />
          </>
        ),
        children: [],
      },
      {
        path: "/admin",
        element: <AppLayout />,
      },
      {
        path: "/preflop-vision",
        element: <PreflopVisionLayout />,
      },
    ],
  },
]);

export default router;
