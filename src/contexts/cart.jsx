import React, { useState, createContext } from "react";
const CartContext = createContext();

function CartProvider({ children }){
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)

    const handleSize = () => {
        let cont = 0
        cart.forEach(e => {
            cont += e.quantity
        })
        setSize(cont)
        console.log(size)
        return
    }
    const handleClick = (item) => {
        if (cart.includes(item)) {
            item.quantity += 1
            handleSize()
            return
        };
        setCart([...cart, item])
        item.quantity += 1
        handleSize()
      };
    
      function handlePrice(){
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        setPrice(ans);
      };
    
      function handleRemove(id){
        const arr = cart.filter((item) => item._id !== id);
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
        value = {{cart, setCart, price, setPrice, size, setSize, handleClick, handleChange, handlePrice, handleRemove }}>
            {children}
        </CartContext.Provider>

    )
}

export {CartContext, CartProvider}

