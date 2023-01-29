import styled from 'styled-components';
import BackgroundImage from '../../assets/images/main-bg.jpg';

const Container = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  padding-top: 120px;
  box-sizing: border-box;
  text-align: center;
  font-family: 'Alegreya Sans SC', sans-serif;

  > h2 {
    position: absolute;
    left: 100px;
    right: 0;
    margin: auto;
    top: 50px;
    opacity: .06;
    font-weight: 900;
    font-size: 12rem;

    @media (max-width: 767px) {
      left: 0;
      top: 90px;
      font-size: 6rem;
    }
  }

  > h1 {
    text-transform: uppercase;
    font-size: 6rem;
    font-weight: 100;

    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }

  > button {
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
`;

export default Container;
