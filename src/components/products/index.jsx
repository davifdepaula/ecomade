import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import ProductsContainer from './style';
import Loading from '../Loading/Loading';
import { CartContext } from '../../contexts/cart';

export default function Products() {
  const { handleClick } = useContext(CartContext);

  const {
    isLoading, isError, data, error,
  } = useQuery(['products'], () => axios.get('produtos').then((response) => response.data));

  if (isLoading) {
    return <Loading show />;
  }

  if (isError) {
    swal('Erro!', error.message ?? 'Ocorreu um erro inesperado, tente novamente mais tarde...', 'error');
  }

  return (
    <ProductsContainer>
      {
          data?.map((item) => (
            <div className="item" key={`${item._id}`}>
              <Link to={`/produtos/${item._id}`}>
                <img src={item.image} alt={`Product ${item._id}`} />
              </Link>
              <div className="title">{item.title}</div>
              <div className="description">
                {item.description.substring(0, 50)}
                ...
              </div>
              <div className="priceItems">
                <span className="price text-brown">
                  R$
                  {' '}
                  {item.price.toFixed(2).replace('.', ',')}
                </span>
                <span onClick={() => handleClick(item)} aria-hidden="true">
                  <ion-icon name="cart-outline" />
                  {' '}
                </span>
              </div>
            </div>
          ))
        }
    </ProductsContainer>
  );
}
