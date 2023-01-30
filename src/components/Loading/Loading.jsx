import React, { useContext } from 'react';
import { GlobalStyle, LoadingStyled } from './Loading.styled';
import AppContext from '../../contexts/app';

export default function Loading(props) {
  const { show } = props;
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <LoadingStyled className={isLoading || show ? 'is-active' : false} />
    </>
  );
}
