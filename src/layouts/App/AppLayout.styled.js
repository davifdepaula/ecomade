import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    &.desktop {
      width: calc(100% - 80px);
      margin-left: 80px;
    }
  }
`;

export default Base;
