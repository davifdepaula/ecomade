import axios from 'axios';
import React, { useCallback, useContext, useState } from 'react';
import { useMutation } from 'react-query';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../contexts/app';
import Form from './LoginForm.styled';
import AuthContext from '../../contexts/auth';

export default function LoginForm(props) {
  const { setToggleValue } = props;
  const { setUser, setToken } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { setIsLoading } = useContext(AppContext);

  const mutation = useMutation((data) => axios.post('/authenticate', data));

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await mutation.mutateAsync(form);

      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      setToken(data.token);
      setUser(data.user);

      navigate('/');
    } catch (error) {
      swal('Erro!', error.response.data ?? 'Ocorreu um erro inesperado, tente novamente mais tarde...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
    ...form,
    [name]: value,
  }), [form, setForm]);

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="email">
        E-mail
        <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleInputChange} />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" placeholder="Senha" onChange={handleInputChange} />
      </label>
      <span aria-hidden="true" onClick={() => setToggleValue(true)}>
        Não possui uma conta?
        {' '}
        <b>Cadastre-se</b>
      </span>
      <button className="primary-button" type="submit">Entrar</button>
    </Form>
  );
}
