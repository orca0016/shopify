import { createBrowserRouter, useLocation } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import CheckOut from "../pages/CheckOut";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/Logins/Login";
import SignUp from "../pages/Logins/SignUp";
import ForgotPassword from "../pages/Logins/ForgotPassword";
import Error from "../pages/Error";
import Test from "../test";
import Contact from "../pages/Contact";

export const MainRoot = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:shopId",
        element: <SingleProduct />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:blogId",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
    errorElement: <Error/>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error/>,
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement:<Error/>,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword/>,
    errorElement: <Error/>,
  },
  {
    path: "/test",
    element: <Test/>,
    errorElement: <Error/>,
  },
]);

