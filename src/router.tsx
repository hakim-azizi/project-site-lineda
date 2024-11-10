import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Article from "./pages/Article";
import BestSeller from "./pages/BestSeller";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Keyword from "./pages/Keyword";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subcategory from "./pages/Subcategory";






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
        path: 'article',
        element: <Article />,
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
        path: 'keyword',
        element: <Keyword />,
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
        path: 'subcategory',
        element: <Subcategory />,
      },
    ],
  },
]);

export default router;
