import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';
import NavbarContainer from './style.jsx';
import Logo from '../../assets/images/logo.jpg';
import CartIcon from '../CartIcon/CartIcon.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <div className="top">
        <input type="image" alt="ecomade-logo" src={Logo} onClick={() => navigate('/')} />
        <Link to="/produtos">
          <ion-icon name="home-outline" />
        </Link>
        <Link to="/carrinho">
          <CartIcon />
        </Link>
        <ion-icon name="search-outline" />
      </div>
      <div>
        { token ? (
          <span aria-hidden="true" onClick={() => handleLogout()}><ion-icon name="log-out-outline" /></span>
        ) : (
          <Link to="/login"><ion-icon name="person-outline" /></Link>
        )}
      </div>
    </NavbarContainer>
  );
}
