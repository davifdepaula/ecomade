import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './Auth.styled';
import Toggle from '../../components/Toggle/Toggle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthContext from '../../contexts/auth';

export default function Auth() {
  const [toggleValue, setToggleValue] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (user) return navigate('/');

  return (
    <Container>
      <h2>{ toggleValue ? 'Cadastro' : 'Login' }</h2>
      <Toggle setToggleValue={setToggleValue} toggleValue={toggleValue} />
      { toggleValue ? (
        <RegisterForm setToggleValue={setToggleValue} />
      ) : (
        <LoginForm setToggleValue={setToggleValue} />
      )}
    </Container>
  );
}
