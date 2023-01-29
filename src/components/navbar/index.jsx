import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';
import NavbarContainer from './style.jsx';
import Logo from '../../assets/images/logo.jpg';
import CartIcon from '../CartIcon/CartIcon.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

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
        {
          token ? <span><ion-icon name="log-out-outline" /></span> : <span aria-hidden="true" onClick={() => navigate('/login')}><ion-icon name="person-outline" /></span>
        }
      </div>
    </NavbarContainer>
  );
}
