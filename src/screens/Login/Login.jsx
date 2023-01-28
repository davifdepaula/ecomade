import React, { useNavigate } from 'react-router-dom';
import { useCallback, useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../contexts/auth.jsx';
import { LoginContent } from './style.jsx';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const { setToken, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('/authenticate', form)
      .then(({ data }) => {
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        setToken(data.token);
        setUser(data.user);
        navigate('/home');
      }).catch((err) => setError(err.response.data));
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
    ...form,
    [name]: value,
  }), [form, setForm]);

  return (
    <LoginContent>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" id="password" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Entrar</button>
        {error ? (<p className="error">{error}</p>) : false}
      </form>
    </LoginContent>
  );
}
