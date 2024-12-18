import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@pages/home"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
