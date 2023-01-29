import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';
import NavbarContainer from './style.jsx';
import Logo from '../../assets/images/logo.jpg';
import { CartContext } from '../../contexts/cart.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const {size} = useContext(CartContext)

  useEffect(() => {
    size
  }, [])

  return (
    <NavbarContainer>
      <div className="top">
        <input type="image" alt="ecomade-logo" src={Logo} onClick={() => navigate('/')} />
        <span onClick={() => navigate("/produtos")}><ion-icon name="home-outline" /></span>
        <span onClick={() => navigate("/cart")}><ion-icon name="cart-outline" />{size ? <span>{size}</span> : null}</span>
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
