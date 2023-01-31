import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart'
import {CartContainer, Order} from './styles'


function Checkout() {
  const {cart, price} = useContext(CartContext)
  const [address, setAddress] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('my-address').then(response => setAddress(response.data))
    .catch(error =>  console.log(error.message))
  }, [])


  function showCart(){
    return (
      <CartContainer>
        {cart.map((item) => (
        <div className="cartBox" key={item._id}>
          <div className="cartImg">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div className='cartQuantity'>    
            <span>Quant: {(item.quantity)}</span>
          </div>
          <div className='cartPrice'>
            <span>preço: R$ {(item.price).toFixed(2).replace(".", ",")}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Valor total: </span>
        <span>R$ {price.toFixed(2).replace(".", ",")}</span>
      </div>
    </CartContainer>
    )}

  function showAdress(){
    return (
      <div className='address'>
        <span>
          Endereço: {address?.address},
          {' '}
          N°: {address?.number},
          {' '}
          Bairro: {address?.area},
          {' '}
          Cep: {address?.cep}
          </span>  
      </div>
    )
  }

  function finishOrder() {
    alert("Pedido feito com sucesso")
    navigate("/")
    window.location.reload(false)
  }

  function comeBack(){
    navigate("/produtos")
  }


  return (
    <Order>
      <div className='orderTitle'>Confirme seu pedido:</div>
      {showCart()}
      {showAdress()}
      <div className='orderBtn'>
        <button type="button" className="primary-button" onClick={()=> comeBack()}>Voltar</button>
        <button type="button" className="primary-button" onClick={() => finishOrder()}>Finalizar</button>
      </div>
    </Order>
  )
}

export default Checkout