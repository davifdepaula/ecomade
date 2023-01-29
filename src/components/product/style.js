import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;

  img {
    width: 500px;
  }

  .informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: 500px;
    gap: 15px;
    margin: 15px;

    .title{
      font-size: 50px;
    }

    .description {
      font-size: 25px;
      color: #a9abac;
      text-align: start;
    }

    .priceItems {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      width: 84%;

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
