import { FC, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

import './scss/App.scss';

const Cart = lazy(() => import('./pages/Cart'));
const FullPizza = lazy(() => import('./pages/FullPizza'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Йде завантаження корзини...</div>}>
              <Cart />
            </Suspense>
          }></Route>
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Йде завантаження піц...</div>}>
              <FullPizza />
            </Suspense>
          }></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Йде завантаження сторінки...</div>}>
              <NotFound />
            </Suspense>
          }></Route>
      </Route>
    </Routes>
  );
};

export default App;
