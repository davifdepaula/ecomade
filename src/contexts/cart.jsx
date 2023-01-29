import React, { useState, createContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import useStickyState from '../hooks/useStickyState';

const CartContext = createContext();

function CartProvider() {
  const [cart, setCart] = useStickyState([], 'cart');
  const [price, setPrice] = useState(0);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    item.quantity += 1;
    setCart([...cart, item]);
  };

  function handlePrice() {
    const total = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setPrice(total);
  }

  function handleRemove(id) {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  }

  function handleChange(item, quantity) {
    if (quantity < 0) {
      if (item.quantity > 0) {
        item.quantity -= 1;
      }
    }
    if (quantity > 0) {
      item.quantity += quantity;
    }
    setCart([...cart]);
  }

  const values = useMemo(() => ({
    cart,
    setCart,
    price,
    setPrice,
    handleClick,
    handleChange,
    handlePrice,
    handleRemove,
  }), [cart, setCart, price, setPrice, handleClick, handleChange, handlePrice, handleRemove]);

  return (
    <CartContext.Provider
      value={values}
    >
      <Outlet />
    </CartContext.Provider>

  );
}

export { CartContext, CartProvider };
