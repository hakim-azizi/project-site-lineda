import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Item from "./pages/Item";
import BestSeller from "./pages/BestSeller";
import CartPage from "./pages/CartPage";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Keyword from "./pages/Keyword";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subcategory from "./pages/Subcategory";
import ConditionOfSale from "./pages/TermsOfSale";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: ':slug/:slug/:slug',
        element: <Item />,
      },
      {
        path: 'best-seller',
        element: <BestSeller />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: ':slug/',
        element: <Category />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'learn-more/:slug',
        element: <Keyword />,
        loader: () =>
          fetch(`${process.env.REACT_APP_API_URL}/api.php?api=keywords`)
          .then((response) => response.json()
          ),
      },
      {
        path: 'list',
        element: <List />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: ':slug/:slug/',
        element: <Subcategory />,
      },
    ],},
    {
    path: '/condition-of-sale',
    element: <ConditionOfSale />,
  },
]);

export default router;
