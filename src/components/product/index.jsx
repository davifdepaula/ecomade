import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Item from './style';
import AppContext from '../../contexts/app';
import { CartContext } from '../../contexts/cart';

export default function Product() {
  const [item, setItem] = useState();
  const { id } = useParams();
  const { setIsLoading } = useContext(AppContext);
  const { handleClick } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`produtos/${id}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Item>
      <img src={item?.image} alt={`Produto ${item?.title}`} />
      <div className="informations">
        <div className="title">{item?.title}</div>
        <div className="description">{item?.description}</div>
        <div className="priceItems">
          <span className="price text-brown">
            R$
            {' '}
            {item?.price?.toFixed(2).replace('.', ',')}
          </span>
          <span onClick={() => handleClick(item)} aria-hidden="true">
            <ion-icon name="cart-outline" />
          </span>
        </div>
      </div>

    </Item>
  );
}
