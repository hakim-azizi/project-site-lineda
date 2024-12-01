import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import BestSeller from './pages/BestSeller';
import CartPage from './pages/CartPage';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Keyword from './pages/Keyword';
import List from './pages/List';
import Login from './pages/Login';
import Register from './pages/Register';
import ConditionOfSale from './pages/TermsOfSale';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='best-seller' element={<BestSeller />}
                  loader={async () =>
                    fetch(`${process.env.REACT_APP_API_URL}/api.php?api=best-seller`).then((response) =>
                      response.json()
                    )
                  }
         />
        <Route path='cart' element={<CartPage />} />
        <Route path=':slug/' element={<Category />}>
          <Route path=':slug/' element={<Category />}>
            <Route path=':slug/' element={<Category />} />
          </Route>
        </Route>
        <Route path='contact' element={<Contact />} />
        <Route
          path='learn-more/:slug'
          element={<Keyword />}
          loader={async () =>
            fetch(`${process.env.REACT_APP_API_URL}/api.php?api=keywords`).then((response) =>
              response.json()
            )
          }
        />
        <Route path='list' element={<List />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='/condition-of-sale' element={<ConditionOfSale />} />
      <Route path='/404' element={<NotFound />} />
    </>
  )
);

export default router;
