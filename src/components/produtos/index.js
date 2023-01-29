import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductsContainer } from './style'
import Loading from '../Loading/Loading'
import { Navigate } from 'react-router-dom'

export default function Products() {
    const [items, setItems] = useState()
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
              <div className='item'>
                <img src={item.image} onClick={() => Navigate( `/products/${item._id}`)} />
                <div className='title'>{item.name}</div>
                <div className='description'>{item.description.substring(0, 50)}...</div>
                <div className='priceItems'><span className='price'>{item.price} R$ </span> <ion-icon name="cart-outline" /></div>
              </div>              
            )
          })
        }
      </ProductsContainer>
    </>
  )
}
