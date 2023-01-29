import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/navbar';
import Base from './AppLayout.styled';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';
import Loading from '../../components/Loading/Loading';
import AppContext from '../../contexts/app';
import GlobalStyle from '../../assets/scss/globalStyles';

function AppLayout() {
  const { windowWidth } = useContext(AppContext);

  const isMobile = windowWidth <= 768;

  const theme = {
    brown: '#9c611f',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Base>
        <Loading />
        { !isMobile ? (
          <Navbar />
        ) : (
          <NavbarMobile />
        ) }
        <main className={!isMobile ? 'desktop' : false}>
          <Outlet />
        </main>
      </Base>
    </ThemeProvider>
  );
}

export default AppLayout;
