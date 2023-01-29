import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Base from './AppLayout.styled';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';
import Loading from '../../components/Loading/Loading';
import AppContext from '../../contexts/app';

function AppLayout() {
  const { windowWidth } = useContext(AppContext);

  const isMobile = windowWidth <= 768;

  return (
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
  );
}

export default AppLayout;
