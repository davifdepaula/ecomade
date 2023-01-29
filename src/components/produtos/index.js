import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ProductsContainer } from './style'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart'

export default function Products() {
    const [items, setItems] = useState()
    const {setCart, handleClick} = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        axios.get(`${url}produtos`)
            .then(response => setItems(response.data))
            .catch(error => console.log(error.message))
    }, [])

  if(!items) return <Loading />
    
  return (
    <>
      <ProductsContainer>
        {
          items.map((item) => {
            return(
              <div className='item' key = {item._id}>
                <img src={item.image} onClick={() => navigate( `/produtos/${item._id}`)} />
                <div className='title'>{item.name}</div>
                <div className='description'>{item.description.substring(0, 50)}...</div>
                <div className='priceItems'>
                  <span className='price'>{item.price} R$ </span> 
                  <span onClick={() => handleClick(item)}><ion-icon name="cart-outline" /> </span>
                </div>
              </div>              
            )
          })
        }
      </ProductsContainer>
    </>
  )
}
