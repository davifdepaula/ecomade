import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const AppContext = createContext({});

export function AppProvider() {
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    windowWidth,
    setWindowWidth,
    sidebarIsOpen,
    setSidebarIsOpen,
    showBackButton,
    setShowBackButton,
  }), [
    isLoading,
    setIsLoading,
    windowWidth,
    setWindowWidth,
    sidebarIsOpen,
    setSidebarIsOpen,
    showBackButton,
    setShowBackButton,
  ]);

  return (
    <AppContext.Provider
      value={values}
    >
      <Outlet />
    </AppContext.Provider>
  );
}

export default AppContext;
