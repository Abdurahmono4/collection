import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

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
import { SiN26 } from "react-icons/si";
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
          path: "product/:id",
          element: <SingleProducts />,
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
