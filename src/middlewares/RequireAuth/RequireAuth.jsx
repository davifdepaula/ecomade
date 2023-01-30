import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

export default function RequireAuth({ children }) {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!user) return navigate('/login');
  }, []);

  return <Outlet />;
}
