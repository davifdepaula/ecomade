import React, { useState, createContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import useStickyState from '../hooks/useStickyState';

const CartContext = createContext();

function CartProvider() {
  const [cart, setCart] = useStickyState([], 'cart');
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);

  const handleSize = () => {
    let cont = 0;
    cart.forEach((e) => {
      cont += e.quantity;
    });
    setSize(cont);
    console.log(size);
  };

  const handleClick = (item) => {
    if (cart.includes(item)) {
      item.quantity += 1;
      handleSize();
      return;
    }
    setCart([...cart, item]);
    item.quantity += 1;
    handleSize();
  };

  function handlePrice() {
    const total = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setPrice(total);
  }

  function handleRemove(id) {
    const arr = cart.filter((item) => item._id !== id);
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
    size,
    handleClick,
    handleChange,
    handlePrice,
    handleRemove,
    handleSize,
  }), [
    cart,
    setCart,
    price,
    setPrice,
    size,
    handleClick,
    handleChange,
    handleSize,
    handlePrice,
    handleRemove,
  ]);

  return (
    <CartContext.Provider
      value={values}
    >
      <Outlet />
    </CartContext.Provider>

  );
}

export { CartContext, CartProvider };
