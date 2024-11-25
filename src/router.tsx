import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Item from "./pages/Item";
import BestSeller from "./pages/BestSeller";
import Cart from "./pages/Cart";
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
        path: 'category/subcategory/item',
        element: <Item />,
      },
      {
        path: 'best-seller',
        element: <BestSeller />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'category',
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
          fetch('http://localhost:3000/api/keywords.json').then(
            (response) => response.json()
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
        path: 'category/subcategory',
        element: <Subcategory />,
      },
    ],},
    {
    path: '/condition-of-sale',
    element: <ConditionOfSale />,
  },
]);

export default router;
