import React from 'react';
import NavbarContainer from './style.jsx';

const urlImg = 'https://d1fdloi71mui9q.cloudfront.net/odp0t5CxT0eCQpbDIE86_a1NSHBi003z3ZF9b';
export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="top">
        <img src={urlImg} alt="ecomade-logo" />
        <ion-icon name="home-outline" />
        <ion-icon name="cart-outline" />
        <ion-icon name="search-outline" />
      </div>
      <div>
        <ion-icon name="person-outline" />
      </div>
    </NavbarContainer>
  );
}
