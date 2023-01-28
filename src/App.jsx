import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/scss/globalStyles.js';
import Login from './screens/Login/Login.jsx';
import Register from './screens/Register/Register.jsx';
import Home from './screens/Home/Home.jsx';
import { AuthProvider } from './contexts/auth.jsx';
import ResetGlobal from './assets/scss/resetStyles.js';
import Navbar from './components/navbar/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ResetGlobal />
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
