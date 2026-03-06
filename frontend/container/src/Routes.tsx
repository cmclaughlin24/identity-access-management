import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Home";
import { federationRoutes as authenticationRoutes } from "authentication/Routes";
import { federationRoutes as certificationRoutes } from "certification/Routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "authentication",
        children: authenticationRoutes,
      },
      {
        path: "certification",
        children: certificationRoutes,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
