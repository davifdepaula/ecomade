import styled from 'styled-components';
import BackgroundImage from '../../assets/images/main-bg.jpg';

const Container = styled.div`
  height: 100vh;
  width: 100%;
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
`;

export default Container;
