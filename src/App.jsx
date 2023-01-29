import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/scss/globalStyles.js';
import Login from './screens/Login/Login.jsx';
import Register from './screens/Register/Register.jsx';
import Home from './screens/Home/Home.jsx';
import { AuthProvider } from './contexts/auth.jsx';
import ResetGlobal from './assets/scss/resetStyles.js';
import Navbar from './components/navbar/index.jsx';
import AppLayout from './layouts/App/AppLayout.jsx';
import { AppProvider } from './contexts/app.jsx';
import Products from './components/produtos/index.js';
import Product from './components/product/index.js';

export default function App() {
  return (
    <BrowserRouter>
      <ResetGlobal />
      <GlobalStyle />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route element={<AppProvider />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/:id" element={<Product />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
