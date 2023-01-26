import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/scss/globalStyles.js';
import Login from './screens/Login/Login.jsx';
import Register from './screens/Register/Register.jsx';
import Home from './screens/Home/Home.jsx';
import { AuthProvider } from './contexts/auth.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />

          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
