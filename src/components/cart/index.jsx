import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs';
import { CartContext } from '../../contexts/cart';

import CartContainer from './style';

export default function Cart() {
  const {
    cart, price, handleChange, handleRemove, handlePrice,
  } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    handlePrice();
  }, []);

  function updateScreen(item) {
    if (item.quantity > 1) {
      handleChange(item, -1);
    } else {
      handleRemove(item.id);
    }
  }

  function showCart() {
    return (
      <CartContainer>
        {cart.map((item) => (
          <div className="cartBox" key={item._id}>
            <div className="cartImg">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
            <div className="buttons">
              <div className="cartButton">
                <span className="plusButton" aria-hidden="true" onClick={() => handleChange(item, 1)}><ion-icon name="add-circle-outline" /></span>
                <span>{(item.quantity)}</span>
                <span className="minusButton" aria-hidden="true" onClick={() => updateScreen(item)}><ion-icon name="remove-circle-outline" /></span>
              </div>
              <div className="cartRemoveButton">
                <span>
                  {(item.price).toFixed(2)}
                  {' '}
                  R$
                </span>
                <span className="trashButton" aria-hidden="true" onClick={() => handleRemove(item._id)}><ion-icon name="trash-outline" /></span>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Valor total no seu carrinho</span>
          <span>
            {price}
            R$
          </span>
        </div>
        <div className="makeOrder">
          <button type="button" className="makeOrderBtn" onClick={() => navigate('/produtos')}>Voltar</button>
          <button type="button" className="makeOrderBtn" onClick={() => navigate('/userInfo')}>Continuar</button>
        </div>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      {cart.length ? showCart()
        : (
          <div className="emptyCart">
            <BsCartX />
            {' '}
            Não há itens no carrinho
            {' '}
            <BsCartX />
          </div>
        )}
    </CartContainer>
  );
}
