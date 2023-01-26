import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/register', form);
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
    ...form,
    [name]: value,
  }), [form, setForm]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" id="name" placeholder="Nome" onChange={handleInputChange} />
        <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" id="password" placeholder="Senha" onChange={handleInputChange} />
        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme a senha" onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>
        {error ? (<p className="error">{error}</p>) : false}
      </form>
    </div>
  );
}
