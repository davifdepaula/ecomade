import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background: #F0F0F0;
    font-family: 'Raleway', sans-serif;
    overflow: ${(props) => (props.theme.sidebarIsOpen ? 'hidden' : 'auto')}
  }

  a {
    color: white;
    text-decoration: none;
  }

  b {
    font-weight: 700;
  }

  .text-brown {
    color: ${(props) => props.theme.brown};
  }

  #root {
    display: flex;
  }

  button.primary-button {
    border-width: 1px;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding: 18px 36px;
    text-align: center;
    white-space: nowrap;
    outline: none;
    border-color: #000;
    background-color: #000;
    color: #fff;
    transition: all .5s;
    border-radius: 500px;
    margin-top: 30px;
    font-size: .8rem;
    text-transform: uppercase;

    &:hover {
      box-shadow: 0 14px 26px -12px rgba(0,0,0,.42),0 4px 23px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2);
      opacity: .8;
    }
  }

  button.primary-button-sm {
    border-width: 1px;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding: 9px 18px;
    text-align: center;
    white-space: nowrap;
    outline: none;
    border-color: #000;
    background-color: #000;
    color: #fff;
    transition: all .5s;
    border-radius: 500px;
    font-size: .8rem;
    text-transform: uppercase;

    &:hover {
      box-shadow: 0 14px 26px -12px rgba(0,0,0,.42),0 4px 23px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2);
      opacity: .8;
    }
  }
`;

export default GlobalStyle;
