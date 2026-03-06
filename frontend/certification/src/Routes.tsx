import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Home";

export const federationRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: federationRoutes,
  },
]);

export default router;
