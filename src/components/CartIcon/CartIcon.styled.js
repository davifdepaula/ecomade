import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  > span {
    position: absolute;
    top: -20px;
    right: -20px;
    color: white;
    border: none;
    border-radius: 100%;
    background: black;
    height: 25px;
    width: 25px;
    font-size: 15px;
    font-weight: 500;
    padding-top: 4px;
    box-sizing: border-box;
  }
`;

export default Container;
