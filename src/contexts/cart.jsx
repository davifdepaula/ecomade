import React, { useState, createContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import useStickyState from '../hooks/useStickyState';

const CartContext = createContext();

function CartProvider() {
  const [cart, setCart] = useStickyState([], 'cart');
  const [price, setPrice] = useState(0);
  const [cartSize, setCartSize] = useStickyState(0, 'cartSize');

  const handleCartSize = () => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartSize(totalItems);
  };

  const handleClick = (item) => {
    const itemExists = cart.some((cartItem) => cartItem._id === item._id);
    if (itemExists) {
      // eslint-disable-next-line no-return-assign
      cart.map((cartItem) => (cartItem._id === item._id
        ? { ...cartItem, quantity: cartItem.quantity += 1 }
        : cartItem));
      setCart(cart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }

    handleCartSize();
  };

  function handlePrice() {
    const total = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setPrice(total);
  }

  function handleRemove(id) {
    const index = cart.indexOf((cartItem) => cartItem._id === id);
    cart.pop(index);
    setCart([...cart]);
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
    handlePrice();
  }

  const values = useMemo(() => ({
    cart,
    setCart,
    price,
    setPrice,
    cartSize,
    handleClick,
    handleChange,
    handlePrice,
    handleRemove,
    handleCartSize,
  }), [
    cart,
    setCart,
    price,
    setPrice,
    cartSize,
    handleClick,
    handleChange,
    handleCartSize,
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
