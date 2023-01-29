import React from 'react';
import {
  BrowserRouter, Route, Routes, useBeforeUnload,
} from 'react-router-dom';
import GlobalStyle from './assets/scss/globalStyles.js';
import Login from './screens/Login/Login.jsx';
import Register from './screens/Register/Register.jsx';
import Home from './screens/Home/Home.jsx';
import { AuthProvider } from './contexts/auth.jsx';
import ResetGlobal from './assets/scss/resetStyles.js';
import Cart from './components/cart/index.jsx';
import AppLayout from './layouts/App/AppLayout.jsx';
import { AppProvider } from './contexts/app.jsx';
import Products from './components/products/index.jsx';
import Product from './components/product/index.jsx';
import { CartProvider } from './contexts/cart.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ResetGlobal />
      <GlobalStyle />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route element={<AppProvider />}>
            <Route element={<CartProvider />}>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/produtos/:id" element={<Product />} />
                <Route path="carrinho" element={<Cart />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
