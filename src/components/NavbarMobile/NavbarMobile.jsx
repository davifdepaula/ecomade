import React, { useContext, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AuthContext from '../../contexts/auth.jsx';
import { Container, Header, InnerMenu } from './NavbarMobile.styled.js';
import Logo from '../../assets/images/logo.jpg';
import AppContext from '../../contexts/app.jsx';
import CartIcon from '../CartIcon/CartIcon.jsx';

export default function NavbarMobile() {
  const navigate = useNavigate();
  const { token, setToken, setUser } = useContext(AuthContext);
  const { sidebarIsOpen, setSidebarIsOpen } = useContext(AppContext);

  const iconClass = useMemo(() => ({ className: 'react-icons' }), []);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setSidebarIsOpen(false);
    navigate('/login');
  };

  return (
    <>
      <Header className={sidebarIsOpen ? 'hide' : false}>
        <div className="left">
          <input type="image" alt="ecomade-logo" src={Logo} onClick={() => navigate('/')} />
        </div>
        <div className="right">
          <IconContext.Provider value={iconClass}>
            { sidebarIsOpen ? (
              <AiOutlineClose onClick={() => setSidebarIsOpen(!sidebarIsOpen)} />
            ) : (
              <AiOutlineMenu onClick={() => setSidebarIsOpen(!sidebarIsOpen)} />
            ) }
          </IconContext.Provider>
        </div>
      </Header>

      <Container className={!sidebarIsOpen ? 'hide' : false}>
        <div className="top">
          <input type="image" alt="ecomade-logo" src={Logo} onClick={() => { setSidebarIsOpen(false); navigate('/'); }} />
          <Link to="/produtos">
            <ion-icon name="home-outline" />
          </Link>
          <Link to="/carrinho">
            <CartIcon />
          </Link>
          <ion-icon name="search-outline" />
        </div>
        <div>
          { token ? (
            <span aria-hidden="true" onClick={() => handleLogout()}><ion-icon name="log-out-outline" /></span>
          ) : (
            <Link to="/login" onClick={() => setSidebarIsOpen(false)}><ion-icon name="person-outline" /></Link>
          )}
        </div>
      </Container>

      <InnerMenu className={!sidebarIsOpen ? 'hide' : false}>
        <ul>
          <li>
            ECOMADE
            <IconContext.Provider value={iconClass}>
              <AiOutlineClose onClick={() => setSidebarIsOpen(false)} />
            </IconContext.Provider>
          </li>
          <li>
            <Link to="/produtos" onClick={() => setSidebarIsOpen(false)}>Produtos</Link>
          </li>
          <li>
            <Link to="/" onClick={() => setSidebarIsOpen(false)}>Pedidos</Link>
          </li>
          <li>
            <Link to="/minha-conta" onClick={() => setSidebarIsOpen(false)}>Minha Conta</Link>
          </li>
        </ul>
      </InnerMenu>
    </>
  );
}
