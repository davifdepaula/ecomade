import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';

export default function Home() {
  const { user, setToken, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    setToken(null);
    setUser(null);
    navigate('/');
  };

  return (
    <>
    </>
  );
}
