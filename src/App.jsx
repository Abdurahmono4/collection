//routes
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

//from index.js
import {
  About,
  Error,
  Login,
  Register,
  Cart,
  CheckOut,
  HomeLayout,
  Landing,
  Orders,
  Products,
  SingleProducts,
} from "./pages/index";
import ErrorElement from "./components/ErrorElement";
//loaders
import { laoder as LandingLoader } from "./pages/Landing";
import { laoder as SingleProductLoader } from "./pages/SingleProducts";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: LandingLoader,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products/:id",
          element: <SingleProducts />,
          loader: SingleProductLoader,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
