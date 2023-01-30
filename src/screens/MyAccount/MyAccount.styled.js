import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-width: 300px;
  width: 70%;

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
    width: 50%;
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

      > .react-icons {
        transition: all .3s;
        cursor: pointer;
        border-radius: 100%;
        border: 1px solid black;
        padding: 7px;
        font-size: 1.2rem;

        &:hover {
          transform: rotate(90deg);
          border-color: ${(props) => props.theme.brown};
          color: ${(props) => props.theme.brown};
        }
      }
    }

    .card-body {
      padding: 20px 20px 0px 20px;

      .info-block {
        margin-bottom: 20px;

        > span:nth-child(1) {
          display: block;
          margin-bottom: 10px;
        }

        > span:nth-child(2) {
          display: block;
          color: #828282;
        }
      }
    }
  }
`;

export default Container;
