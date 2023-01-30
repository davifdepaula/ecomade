import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from './screens/Home/Home.jsx';
import { AuthProvider } from './contexts/auth.jsx';
import ResetGlobal from './assets/scss/resetStyles.js';
import Cart from './components/cart/index.jsx';
import AppLayout from './layouts/App/AppLayout.jsx';
import { AppProvider } from './contexts/app.jsx';
import Products from './components/products/index.jsx';
import Product from './components/product/index.jsx';
import { CartProvider } from './contexts/cart.jsx';
import Auth from './screens/Auth/Auth.jsx';
import MyAccount from './screens/MyAccount/MyAccount.jsx';
import RequireAuth from './middlewares/RequireAuth/RequireAuth.jsx';
import MyAccountEdit from './screens/MyAccount/Edit/MyAccountEdit.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ResetGlobal />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route element={<AppProvider />}>
            <Route element={<CartProvider />}>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/produtos/:id" element={<Product />} />
                <Route path="carrinho" element={<Cart />} />
                <Route element={<RequireAuth />}>
                  <Route path="minha-conta" element={<MyAccount />} />
                  <Route path="minha-conta/editar" element={<MyAccountEdit />} />
                </Route>
                <Route path="*" element={<Home />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
