import App from "./App";
import ErrorPage from "./components/ErrorPage";
import CartPage from "./components/CartPage";

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    }
  ];

export default routes;