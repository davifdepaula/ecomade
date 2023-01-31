import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Loading from '../Loading/Loading';
import Item from './style';
import { CartContext } from '../../contexts/cart';
import AppContext from '../../contexts/app';

export default function Product() {
  const { id } = useParams();
  const { handleClick } = useContext(CartContext);
  const { setShowBackButton } = useContext(AppContext);

  const {
    isLoading, isError, data, error,
  } = useQuery(['products', id], () => axios.get(`produtos/${id}`).then((response) => response.data));

  useEffect(() => {
    setShowBackButton(true);
  }, []);

  if (isLoading) {
    return <Loading show />;
  }

  if (isError) {
    swal('Erro!', error.message ?? 'Ocorreu um erro inesperado, tente novamente mais tarde...', 'error');
  }

  return (
    <Item>
      <img src={data?.image} alt={`Produto ${data?.title}`} />
      <div className="informations">
        <div className="title">{data?.title}</div>
        <div className="description">{data?.description}</div>
        <div className="priceItems">
          <span className="price text-brown">
            R$
            {' '}
            {data?.price?.toFixed(2).replace('.', ',')}
          </span>
          <span onClick={() => handleClick(data)} aria-hidden="true">
            <ion-icon name="cart-outline" />
          </span>
        </div>
      </div>

    </Item>
  );
}
