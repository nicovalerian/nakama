import App from "./App";
import ErrorPage from "./components/ErrorPage";
import CartPage from "./components/CartPage";
import Shop from "./components/Shop";

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
    {
      path: "shop",
      element: <Shop />,
    }
  ];

export default routes;