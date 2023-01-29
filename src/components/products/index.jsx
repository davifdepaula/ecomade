import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ProductsContainer from './style';
import Loading from '../Loading/Loading';
import { CartContext } from '../../contexts/cart';
import AppContext from '../../contexts/app';

export default function Products() {
  const [items, setItems] = useState();
  const { setCart, handleClick } = useContext(CartContext);
  const { setIsLoading } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const url = process.env.REACT_APP_API_URL;
    axios.get(`${url}produtos`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ProductsContainer>
      {
          items?.map((item) => (
            <div className="item" key={`${item._id}`}>
              <Link to={`/produtos/${item._id}`}>
                <img src={item.image} alt={`Product ${item._id}`} />
              </Link>
              <div className="title">{item.name}</div>
              <div className="description">
                {item.description.substring(0, 50)}
                ...
              </div>
              <div className="priceItems">
                <span className="price">
                  {item.price}
                  {' '}
                  R$
                  {' '}
                </span>
                <span onKeyDown={() => handleClick(item)}>
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
