import React, {
  useCallback,
  useContext, useEffect, useMemo, useState,
} from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import swal from 'sweetalert';
import { IconContext } from 'react-icons/lib';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Container from './MyAccountEdit.styled';
import AuthContext from '../../../contexts/auth';
import Loading from '../../../components/Loading/Loading';
import AppContext from '../../../contexts/app';

export default function MyAccountEdit() {
  const { user } = useContext(AuthContext);
  const [account, setAccount] = useState({});
  const { setIsLoading } = useContext(AppContext);

  const navigate = useNavigate();

  const {
    data, isLoading, isFetched,
  } = useQuery(['myAddress'], () => axios.get('my-address').then((response) => response.data), {
    onError: (error) => swal('Erro!', error.message ?? 'Ocorreu um erro inesperado, tente novamente mais tarde...', 'error'),
  });

  const iconClass = useMemo(() => ({ className: 'react-icons' }), []);

  useEffect(() => {
    setAccount(user);

    if (isFetched) {
      setAccount({ ...account, address: data });
    }
  }, [isFetched]);

  const mutation = useMutation((form) => axios.put('/my-account', form));

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await mutation.mutateAsync(account);

      swal('Sucesso!', 'Conta editada com sucesso!', 'success');
      navigate('/minha-conta');
    } catch (error) {
      swal('Erro!', error.message ?? 'Ocorreu um erro inesperado, tente novamente mais tarde...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressChange = useCallback(({ target: { name, value } }) => setAccount({
    ...account,
    address: {
      ...account.address,
      [name]: value,
    },
  }), [account, setAccount]);

  if (isLoading) {
    return <Loading show />;
  }

  return (
    <Container>
      <h2>Editar Minha Conta</h2>

      <form onSubmit={onSubmit}>
        <div className="card">
          <div className="card-title">
            <h3>Meus Dados</h3>
            <div className="options">
              <IconContext.Provider value={iconClass}>
                <FiArrowLeftCircle onClick={() => navigate('/minha-conta')} />
              </IconContext.Provider>
              <button className="primary-button-sm" type="submit">Editar</button>
            </div>
          </div>
          <div className="card-body">
            <label htmlFor="name">
              Nome
              <input type="text" name="name" id="name" placeholder="Nome" defaultValue={account.name} onChange={(e) => setAccount({ ...account, name: e.target.value })} required />
            </label>
            <label htmlFor="email">
              E-mail
              <input type="email" name="email" id="email" placeholder="E-mail" defaultValue={account.email} onChange={(e) => setAccount({ ...account, email: e.target.value })} required />
            </label>
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            <h3>Meu Endereço</h3>
          </div>
          <div className="card-body">
            <label htmlFor="cep" className="w-100">
              CEP
              <input type="text" name="cep" id="cep" placeholder="CEP" defaultValue={data.cep} onChange={handleAddressChange} required />
            </label>
            <label htmlFor="address">
              Rua
              <input type="text" name="address" id="address" placeholder="Rua" defaultValue={data.address} onChange={handleAddressChange} required />
            </label>
            <label htmlFor="number">
              Número
              <input type="text" name="number" id="number" placeholder="Número" defaultValue={data.number} onChange={handleAddressChange} required />
            </label>
            <label htmlFor="complement">
              Complemento
              <input type="text" name="complement" id="complement" placeholder="Complemento" defaultValue={data.complement} onChange={handleAddressChange} />
            </label>
            <label htmlFor="area">
              Bairro
              <input type="text" name="area" id="area" placeholder="Bairro" defaultValue={data.area} onChange={handleAddressChange} required />
            </label>
            <label htmlFor="city">
              Cidade
              <input type="text" name="city" id="city" placeholder="Cidade" defaultValue={data.city} onChange={handleAddressChange} required />
            </label>
            <label htmlFor="state">
              Estado
              <input type="text" name="state" id="state" placeholder="Estado" defaultValue={data.state} onChange={handleAddressChange} required />
            </label>
          </div>
        </div>
      </form>
    </Container>
  );
}
