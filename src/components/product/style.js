import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 70px;
  box-sizing: border-box;
  gap: 15px;

  img {
    min-width: 280px;
    max-width: 425px;
    width: 35%;
  }

  .informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    min-width: 280px;
    gap: 25px;
    margin: 15px;

    .title{
      font-size: 45px;
    }

    .description {
      font-size: 25px;
      color: #a9abac;
      text-align: start;
    }

    @media all and (max-width: 767px) {
      .title, .description {
        text-align: center;
      }
    }

    .priceItems {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      width: 100%;

      .price{
        text-align: center;
        font-size: 30px;
      }

      ion-icon {
        cursor: pointer;
        color: #a9abac;
        font-size: 50px;

        &:hover {
          color: #000;
          transition: 0.3s;
        }
      }
    }
  }
`;

export default Item;
