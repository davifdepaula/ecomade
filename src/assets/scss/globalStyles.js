import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background: #F0F0F0;
    font-family: 'Raleway', sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .text-dark {
    color: black;
  }

  #root {
    display: flex;
  }
`;

export default GlobalStyle;
