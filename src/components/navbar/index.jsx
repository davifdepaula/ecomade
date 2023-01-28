import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';
import NavbarContainer from './style.jsx';

const urlImg = 'https://d1fdloi71mui9q.cloudfront.net/odp0t5CxT0eCQpbDIE86_a1NSHBi003z3ZF9b';
export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  return (
    <NavbarContainer>
      <div className="top">
        <input type="image" alt="ecomade-logo" src={urlImg} onClick={() => navigate('/home')} />
        <ion-icon name="home-outline" />
        <ion-icon name="cart-outline" />
        <ion-icon name="search-outline" />
      </div>
      <div>
        {
        token ? <span><ion-icon name="log-out-outline" /></span> : <span onClick={() => navigate('/login')}><ion-icon name="person-outline" /></span>
}
      </div>
    </NavbarContainer>
  );
}
