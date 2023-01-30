import axios from 'axios';
import React, { useCallback, useContext, useState } from 'react';
import { useMutation } from 'react-query';
import swal from 'sweetalert';
import AppContext from '../../contexts/app';
import Form from './RegisterForm.styled';

export default function RegisterForm(props) {
  const { setToggleValue } = props;

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const { setIsLoading } = useContext(AppContext);

  const mutation = useMutation((data) => axios.post('/register', data));

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await mutation.mutateAsync(form);
      setToggleValue(false);
      swal('Sucesso!', 'Cadastro realizado com sucesso.', 'success');
    } catch (error) {
      swal('Erro!', error.response.status !== 409 ? error.response.data : 'E-mail já cadastrado.', 'error');
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
      <label htmlFor="name">
        Nome
        <input type="text" name="name" id="name" placeholder="Nome" onChange={handleInputChange} />
      </label>
      <label htmlFor="email">
        E-mail
        <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleInputChange} />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" placeholder="Senha" onChange={handleInputChange} />
      </label>
      <label htmlFor="password_confirmation">
        Confirme a senha
        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme a senha" onChange={handleInputChange} />
      </label>
      <span aria-hidden="true" onClick={() => setToggleValue(false)}>
        Já é cadastrado?
        {' '}
        <b>Faça login!</b>
      </span>
      <button className="primary-button" type="submit">Cadastrar</button>
    </Form>
  );
}
