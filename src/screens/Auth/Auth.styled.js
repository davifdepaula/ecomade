import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 70px;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  > h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2rem;
  }
`;

export default Container;
