import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';
import NavbarContainer from './style.jsx';
import Logo from '../../assets/images/logo.jpg';

export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  return (
    <NavbarContainer>
      <div className="top">
        <input type="image" alt="ecomade-logo" src={Logo} onClick={() => navigate('/')} />
        <span onClick={() => navigate("/produtos")}><ion-icon name="home-outline" /></span>
        <ion-icon name="cart-outline" />
        <ion-icon name="search-outline" />
      </div>
      <div>
        {
          token ? <span><ion-icon name="log-out-outline" /></span> : <span onKeyDown={() => navigate('/login')}><ion-icon name="person-outline" /></span>
        }
      </div>
    </NavbarContainer>
  );
}
