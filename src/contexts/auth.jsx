import React, { createContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import useStickyState from '../hooks/useStickyState.js';

const AuthContext = createContext({});

export function AuthProvider() {
  const [token, setToken] = useStickyState(null, 'token');
  const [user, setUser] = useStickyState(null, 'user');

  useEffect(() => {
    if (token?.length) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);

  const values = useMemo(() => ({
    token,
    setToken,
    user,
    setUser,
  }), [token, setToken, user, setUser]);

  return (
    <AuthContext.Provider
      value={values}
    >
      <Outlet />
    </AuthContext.Provider>
  );
}

export default AuthContext;
