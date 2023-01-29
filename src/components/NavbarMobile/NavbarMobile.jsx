import React, { useContext, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AuthContext from '../../contexts/auth.jsx';
import { Container, Header, InnerMenu } from './NavbarMobile.styled.js';
import Logo from '../../assets/images/logo.jpg';
import AppContext from '../../contexts/app.jsx';

export default function NavbarMobile() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const { sidebarIsOpen, setSidebarIsOpen } = useContext(AppContext);

  const iconClass = useMemo(() => ({ className: 'react-icons' }), []);

  return (
    <>
      <Header className={sidebarIsOpen ? 'hide' : false}>
        <div className="left">
          <input type="image" alt="ecomade-logo" src={Logo} onClick={() => navigate('/home')} />
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
          <input type="image" alt="ecomade-logo" src={Logo} onClick={() => navigate('/home')} />
          <ion-icon name="home-outline" />
          <ion-icon name="cart-outline" />
          <ion-icon name="search-outline" />
        </div>
        <div>
          {
            token ? <span><ion-icon name="log-out-outline" /></span> : <span aria-hidden="true" onClick={() => navigate('/login')}><ion-icon name="person-outline" /></span>
          }
        </div>
      </Container>

      <InnerMenu className={!sidebarIsOpen ? 'hide' : false}>
        <ul>
          <li>
            ECOMADE
            <IconContext.Provider value={iconClass}>
              <AiOutlineClose onClick={() => setSidebarIsOpen(!sidebarIsOpen)} />
            </IconContext.Provider>
          </li>
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/">Pedidos</Link>
          </li>
          <li>
            <Link to="/">Minha Conta</Link>
          </li>
        </ul>
      </InnerMenu>
    </>
  );
}
