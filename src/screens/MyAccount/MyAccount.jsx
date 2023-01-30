import React, { useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import swal from 'sweetalert';
import { IconContext } from 'react-icons/lib';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Container from './MyAccount.styled';
import AuthContext from '../../contexts/auth';
import Loading from '../../components/Loading/Loading';

export default function MyAccount() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    isLoading, isError, data, error,
  } = useQuery(['myAddress'], () => axios.get('my-address').then((response) => response.data));

  const iconClass = useMemo(() => ({ className: 'react-icons' }), []);

  if (isLoading) {
    return <Loading show />;
  }

  if (isError) {
    swal('Erro!', error.message ?? 'Ocorreu um erro inesperado, tente novamente mais tarde...', 'error');
  }

  return (
    <Container>
      <h2>Minha Conta</h2>

      <div className="card">
        <div className="card-title">
          <h3>Meus Dados</h3>
          <IconContext.Provider value={iconClass}>
            <FiSettings onClick={() => navigate('/minha-conta/editar')} />
          </IconContext.Provider>
        </div>
        <div className="card-body">
          <div className="info-block">
            <span>Nome</span>
            <span>{ user.name }</span>
          </div>
          <div className="info-block">
            <span>E-mail</span>
            <span>{ user.email }</span>
          </div>
        </div>
      </div>

      {data && (
        <div className="card">
          <div className="card-title">
            <h3>Meu Endereço</h3>
          </div>
          <div className="card-body">
            <div className="info-block">
              <span>CEP</span>
              <span>{ data.cep }</span>
            </div>
            <div className="info-block">
              <span>Rua</span>
              <span>{ data.address }</span>
            </div>
            <div className="info-block">
              <span>Número</span>
              <span>{ data.number }</span>
            </div>
            <div className="info-block">
              <span>Complemento</span>
              <span>{ data.complement }</span>
            </div>
            <div className="info-block">
              <span>Bairro</span>
              <span>{ data.area }</span>
            </div>
            <div className="info-block">
              <span>Cidade</span>
              <span>{ data.city }</span>
            </div>
            <div className="info-block">
              <span>Estado</span>
              <span>{ data.state }</span>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
