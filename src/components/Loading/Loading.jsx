import React, { useContext } from 'react';
import { GlobalStyle, LoadingStyled } from './Loading.styled';
import AppContext from '../../contexts/app';

export default function Loading() {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <LoadingStyled className={isLoading ? 'is-active' : false} />
    </>
  );
}
