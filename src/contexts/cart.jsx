import React, { useState, createContext } from "react";
const CartContext = createContext();

function CartProvider({ children }){
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        item.quantity += 1
        setCart([...cart, item]);
      };
    
      function handlePrice(){
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        setPrice(ans);
      };
    
      function handleRemove(id){
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
      };
    
      function handleChange(item, quantity){
        if (quantity < 0){
          if (item.quantity > 0){
            item.quantity--        
          }
        }
        if (quantity > 0) {
          item.quantity += quantity
        }
        setCart([...cart])      
      };
    

    return (
        <CartContext.Provider 
        value = {{cart, setCart, price, setPrice, handleClick, handleChange, handlePrice, handleRemove }}>
            {children}
        </CartContext.Provider>

    )
}

export {CartContext, CartProvider}

