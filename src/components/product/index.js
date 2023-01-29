import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'
import { Item } from './style'

export default function Product() {
    const [item, setItem] = useState()
    const {id} = useParams()
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        axios.get(`${url}produtos/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.log(error.message))
    }, [])

  if(!item) return <Loading />

  return(
    <Item>
      <img src={item.image}/>
      <div className='informations'>
        <div className='title'>{item.title}</div>
        <div className='description'>{item.description}</div>
        <div className='priceItems'>
            <span className='price'>{item.price} R$ </span> 
            <ion-icon name="cart-outline" />
        </div>
      </div>
      
    </Item>              
  )
}
