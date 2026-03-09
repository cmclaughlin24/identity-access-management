import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

export const federationRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
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
