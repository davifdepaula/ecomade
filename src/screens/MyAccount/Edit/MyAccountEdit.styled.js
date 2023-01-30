import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-width: 300px;
  width: 70%;

  @media all and (max-width: 768px) {
    width: 90%;
  }

  > h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 50px;
  }

  .card {
    position: relative;
    background-color: #fff;
    border: 1px solid #ededed;
    border-radius: 0.1875rem;
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    -webkit-transition: all .5s;
    transition: all .5s;
    margin-bottom: 20px;
    position: relative;
    height: auto;

    &:hover {
      box-shadow: 0 5px 43px rgba(0,0,0,.11)!important;
    }

    .card-title {
      position: relative;
      padding: 15px 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border-bottom: 1px solid rgba(0,0,0,.1);
      background: #fcfcfc;
      z-index: 2;

      .options {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .react-icons {
        transition: all .3s;
        cursor: pointer;
        border-radius: 100%;
        border: 1px solid black;
        padding: 7px;
        font-size: 1.2rem;

        &:hover {
          transform: rotate(360deg);
          border-color: ${(props) => props.theme.brown};
          color: ${(props) => props.theme.brown};
        }
      }
    }

    .card-body {
      padding: 20px 20px 0px 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;

      > label {
        flex: 30%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: start;
        font-family: montserrat,sans-serif;
        text-transform: uppercase;
        font-size: .85rem;
        font-weight: 500;
        margin-bottom: 15px;

        @media all and (max-width: 768px) {
          flex: 40%;
        }

        @media all and (max-width: 425px) {
          flex: 100%;
        }

        &.w-100 {
          flex: 100%;
        }

        > input {
          margin-top: 5px;
          height: 44px;
          box-shadow: none;
          width: 100%;
          padding: 7px;
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid #dbdbdb;
        }
      }
    }
  }
`;

export default Container;
