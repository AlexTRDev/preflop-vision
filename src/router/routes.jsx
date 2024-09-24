import { createBrowserRouter } from "react-router-dom";
import {
  AppComponent,
  ControllerPreflopVisionComponent,
  EditMatrixComponent,
  HeroComponent,
  NavBarPrefolVisionComponent,
  ViewTableComponent,
} from "../components";

const router = createBrowserRouter([
  {
    path: "",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <HeroComponent />,
        children: [],
      },
      {
        path: "preflop-vision",
        element: <NavBarPrefolVisionComponent />,
        children: [
          {
            path: "full",
            element: <ControllerPreflopVisionComponent />,
            children: [
              {
                path: ":id",
                element: <ViewTableComponent />,
              },
            ],
          },
          {
            path: "3h",
            element: <ControllerPreflopVisionComponent />,
            children: [{ path: ":id", element: <ViewTableComponent /> }],
          },
          {
            path: "hu",
            element: <ControllerPreflopVisionComponent />,
            children: [{ path: ":id", element: <ViewTableComponent /> }],
          },
        ],
      },
      {
        path: "tablas/editar/:id",
        element: <EditMatrixComponent />,
      },
    ],
  },
]);

export default router;
