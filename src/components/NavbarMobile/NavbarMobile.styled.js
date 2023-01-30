import styled from 'styled-components';
import Sidebar from '../../assets/images/sidebar.jpeg';

export const Header = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  width: 100%;
  z-index: 3;
  position: absolute;
  box-sizing: border-box;
  transform: translateY(0);
  transition: all .3s;

  &.hide {
    transform: translateY(-100%);
    transition: all .3s;
  }

  > .left {
    display: flex;
    align-items: center;
    gap: 20px;

    input {
      height: 30px;
      border-radius: 100%
    }
  }

  .react-icons {
    font-size: 1.5em;
    color: #aaa;
    cursor: pointer;

    &:hover {
      color: #000;
      transition: 0.3s;
    }
  }
`;

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 0 2px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 80px;
  z-index: 3;
  position: absolute;
  transform: translateX(0);
  transition: all .3s;

  &.hide {
    transform: translateX(-100%);
    transition: all .3s;
  }

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
    }
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const InnerMenu = styled.div`
  background-image: url(${Sidebar});
  background-color: #344258;
  background-size: cover;
  background-position: bottom;
  box-shadow: 2px 0 2px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: calc(100% - 80px);
  z-index: 2;
  position: absolute;
  left: 80px;
  transform: translateX(0);
  transition: all .3s .3s;
  opacity: 1;
  box-sizing: border-box;

  &.hide {
    transform: translateX(-100%);
    transition: all .3s;
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(43,56,76,.95);
  }

  > ul {
    z-index: 2;

    > li {
      font-size: .95rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 6px;
      padding: 30px;
      border-bottom: 1px solid #3d4e68;

      .react-icons {
        float: right;
        cursor: pointer;
      }
    }
  }
`;
