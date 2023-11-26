import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import GameDetailsPage from "../pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <Layout />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "game-details/:slug", element: <GameDetailsPage /> },
    ],
  },
]);
export default router;
