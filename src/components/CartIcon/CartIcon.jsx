import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import Container from './CartIcon.styled';

export default function CartIcon() {
  const { cartSize } = useContext(CartContext);

  return (
    <Container>
      <ion-icon name="cart-outline" />
      {cartSize ? <span>{cartSize}</span> : null}
    </Container>
  );
}
