import React from 'react'
import {useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart';

import { BsCartX } from "react-icons/bs"
import { CartContainer } from './style';


export default function Cart() {
  const {cart, setCart, price, setPrice, size, handleClick, handleChange, handleRemove, handlePrice} = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    size
  })

  useEffect(() => {
    handlePrice()
  })

  function updateScreen(item){
    if (item.quantity > 1){
      handleChange(item, -1)
    }
    else {
      handleRemove(item._id)
    }
  }

  function showCart(){
    return (
      <CartContainer>
        {cart.map((item) => (
        <div className="cartBox" key={item._id}>
          <div className="cartImg">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div className='buttons'>
            <div className='cartButton'>
                <span className='plusButton' onClick={() => handleChange(item, 1)}><ion-icon name="add-circle-outline"></ion-icon></span>
                <span>{(item.quantity)}</span>
                <span className='minusButton' onClick={() => updateScreen(item)}><ion-icon name="remove-circle-outline"></ion-icon></span>
            </div>
            <div className='cartRemoveButton'>
                <span>{(item.quantity*item.price).toFixed(2)} R$</span>
                <span className='trashButton' onClick={() => handleRemove(item._id)}><ion-icon name="trash-outline"></ion-icon></span>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Valor total no seu carrinho</span>
        <span>{price}R$</span>
      </div>
        <div className='makeOrder'>
            <button className='makeOrderBtn' onClick={() => navigate('/produtos')}>Voltar</button>
            <button className='makeOrderBtn' onClick={() => navigate('/userInfo')}>Continuar</button>
        </div>
      </CartContainer>
    )
  }

  return (
    <CartContainer>
      {cart.length ? showCart() :
      <div className='emptyCart'><BsCartX/> Não há itens no carrinho <BsCartX/></div>
      }
    </CartContainer>
  )
}
