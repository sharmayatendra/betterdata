import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
