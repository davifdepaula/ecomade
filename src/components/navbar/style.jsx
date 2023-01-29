import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 0 2px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 80px;

  div {
    font-size: 20px;
    margin: 20px;
    text-align: center;
  }

  input {
    width: 40px;
    border-radius: 100%
  }

  ion-icon {
    cursor: pointer;
    color: #a9abac;

    &:hover {
      color: #000;
      transition: 0.3s;
    }
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export default NavbarContainer;
