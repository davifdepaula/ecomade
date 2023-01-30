import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .toggler {
    position: relative;
    width: 68px;
    margin: 30px auto;

    .auth-toggler>input:checked+.toggler-track .hexagon-wrap .hexagon svg.register-icon {
      display: block;
    }

    > input {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 2;

      &:checked+.toggler-track .hexagon-wrap {
        margin-left: 38px;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);

        .hexagon {
          background-color: black;

          &:before {
            border-bottom-color: black
          }

          &:after {
            border-top-color: black
          }

          svg.register-icon {
            display: block;
          }

          svg.login-icon {
            display: none;
          }
        }
      }
    }

    .toggler-track {
      position: relative;
      width: 100%;
      height: 20px;
      background: #e0e0e0;
      border-radius: 100px;

      .hexagon-wrap {
        position: absolute;
        top: -12px;
        left: -4px;
        -webkit-transition: all .3s;
        transition: all .3s;

        .hexagon {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          position: relative;
          width: 38px;
          height: 21.94px;
          background-color: #fff;
          margin: 10.97px 0;

          &:before {
            bottom: 100%;
            border-bottom: 10.97px solid #fff;
          }

          &:after {
            top: 100%;
            width: 0;
            border-top: 10.97px solid #fff;
          }

          &:before, &:after {
            content: "";
            position: absolute;
            width: 0;
            border-left: 19px solid transparent;
            border-right: 19px solid transparent;
          }

          svg.register-icon {
            display: none;
            stroke: #fff;
          }

          svg.login-icon {
            display: block;
            stroke: #4a4a4a;
          }
        }
      }
    }
  }
`;

export default GlobalStyle;
