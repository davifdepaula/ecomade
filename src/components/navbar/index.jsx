import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { AiOutlineClose } from 'react-icons/ai';
import AuthContext from '../../contexts/auth.jsx';
import { NavbarContainer, InnerMenu } from './style.jsx';
import Logo from '../../assets/images/logo.jpg';
import CartIcon from '../CartIcon/CartIcon.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken, setUser } = useContext(AuthContext);
  const [showInnerMenu, setShowInnerMenu] = useState(false);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setShowInnerMenu(false);
    navigate('/login');
  };

  const iconClass = useMemo(() => ({ className: 'react-icons' }), []);

  return (
    <>
      <NavbarContainer>
        <div className="top">
          <input type="image" alt="ecomade-logo" src={Logo} onClick={() => { setShowInnerMenu(false); navigate('/'); }} />
          <span aria-hidden="true" onClick={() => setShowInnerMenu(!showInnerMenu)}>
            <ion-icon name="home-outline" />
          </span>
          <Link to="/carrinho">
            <CartIcon />
          </Link>
          <ion-icon name="search-outline" />
        </div>
        <div>
          { token ? (
            <span aria-hidden="true" onClick={() => handleLogout()}><ion-icon name="log-out-outline" /></span>
          ) : (
            <Link to="/login" onClick={() => setShowInnerMenu(false)}><ion-icon name="person-outline" /></Link>
          )}
        </div>
      </NavbarContainer>

      <InnerMenu className={!showInnerMenu ? 'hide' : false}>
        <ul>
          <li>
            ECOMADE
            <IconContext.Provider value={iconClass}>
              <AiOutlineClose onClick={() => setShowInnerMenu(!showInnerMenu)} />
            </IconContext.Provider>
          </li>
          <li>
            <Link to="/produtos" onClick={() => setShowInnerMenu(false)}>Produtos</Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShowInnerMenu(false)}>Pedidos</Link>
          </li>
          <li>
            <Link to="/minha-conta" onClick={() => setShowInnerMenu(false)}>Minha Conta</Link>
          </li>
        </ul>
      </InnerMenu>
    </>
  );
}
