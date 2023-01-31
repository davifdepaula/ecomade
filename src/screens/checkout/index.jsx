import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from '../../components/cart'
import Order from '../../components/order'
import { CartContext } from '../../contexts/cart'
import { OrderContainer } from './styles'


function Checkout() {
  const {cart, price} = useContext(CartContext)
  const [address, setAddress] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('my-address').then(response => setAddress(response.data))
    .catch(error =>  console.log(error.message))
  }, [])

  function finishOrder() {
    alert("Pedido feito com sucesso")
    navigate("/")
    window.location.reload(false)
  }

  function comeBack(){
    navigate("/produtos")
  }


  return (
    <OrderContainer>
      <div className='orderTitle'>Confirme seu pedido:</div>
      <Order />
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
      <div className='orderBtn'>
        <button type="button" className="primary-button" onClick={()=> comeBack()}>Voltar</button>
        <button type="button" className="primary-button" onClick={() => finishOrder()}>Finalizar</button>
      </div>
    </OrderContainer>
  )
}

export default Checkout