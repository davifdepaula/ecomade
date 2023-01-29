import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background: #F0F0F0;
    font-family: 'Raleway', sans-serif;
  }

  #root {
    display: flex;
  }
`;

export default GlobalStyle;
